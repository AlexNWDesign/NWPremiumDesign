#!/usr/bin/env node

const DEFAULT_BASE_URL = process.env.BASE_URL || "http://127.0.0.1:3000";
const EXPECTED_HOSTNAME =
  process.env.EXPECTED_HOSTNAME || "https://nwpremiumdesign.com";

const faviconChecks = [
  {
    label: "favicon.ico",
    path: "/favicon.ico",
    kind: "ico",
  },
  {
    label: "favicon-48x48.png",
    path: "/favicon-48x48.png",
    kind: "png",
    width: 48,
    height: 48,
  },
  {
    label: "favicon-96x96.png",
    path: "/favicon-96x96.png",
    kind: "png",
    width: 96,
    height: 96,
  },
  {
    label: "favicon-192x192.png",
    path: "/favicon-192x192.png",
    kind: "png",
    width: 192,
    height: 192,
  },
  {
    label: "apple-touch-icon.png",
    path: "/apple-touch-icon.png",
    kind: "png",
    width: 180,
    height: 180,
  },
  {
    label: "site.webmanifest",
    path: "/site.webmanifest",
    kind: "manifest",
  },
];

const expectedHeadPatterns = [
  /<link[^>]+rel=["'][^"']*shortcut icon[^"']*["'][^>]+href=["'][^"']*\/favicon\.ico\?v=2["'][^>]*>/i,
  /<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]+href=["'][^"']*\/favicon\.ico\?v=2["'][^>]*>/i,
  /<link(?=[^>]*rel=["'][^"']*icon[^"']*["'])(?=[^>]*href=["'][^"']*\/favicon-48x48\.png\?v=2["'])(?=[^>]*sizes=["']48x48["'])[^>]*>/i,
  /<link(?=[^>]*rel=["'][^"']*icon[^"']*["'])(?=[^>]*href=["'][^"']*\/favicon-96x96\.png\?v=2["'])(?=[^>]*sizes=["']96x96["'])[^>]*>/i,
  /<link(?=[^>]*rel=["'][^"']*icon[^"']*["'])(?=[^>]*href=["'][^"']*\/favicon-192x192\.png\?v=2["'])(?=[^>]*sizes=["']192x192["'])[^>]*>/i,
  /<link(?=[^>]*rel=["']apple-touch-icon["'])(?=[^>]*href=["'][^"']*\/apple-touch-icon\.png\?v=2["'])(?=[^>]*sizes=["']180x180["'])[^>]*>/i,
  /<link[^>]+rel=["']manifest["'][^>]+href=["'][^"']*\/site\.webmanifest\?v=2["'][^>]*>/i,
];

const blockedPatterns = [
  /\/icon\.png/i,
  /\/apple-icon\.png/i,
  /\/manifest\.webmanifest/i,
  /vercel\.svg/i,
  /next\.svg/i,
  /globe\.svg/i,
  /react\.svg/i,
];

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "nwpd-favicon-check/1.0",
    },
  });

  return {
    status: response.status,
    headers: response.headers,
    text: await response.text(),
  };
}

async function fetchBuffer(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "nwpd-favicon-check/1.0",
    },
  });

  return {
    status: response.status,
    headers: response.headers,
    buffer: Buffer.from(await response.arrayBuffer()),
  };
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

function pngDimensions(buffer) {
  const signature = "89504e470d0a1a0a";
  if (buffer.subarray(0, 8).toString("hex") !== signature) {
    throw new Error("not a PNG file");
  }

  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  return { width, height };
}

function includesNoindex(html) {
  return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
}

function canonicalFromHtml(html) {
  const match = html.match(
    /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i
  );

  return match ? match[1] : null;
}

function normalizePath(urlString) {
  const url = new URL(urlString);
  return `${url.pathname}${url.search}`;
}

function expectedCanonical(pathname) {
  return pathname === "/" ? EXPECTED_HOSTNAME : `${EXPECTED_HOSTNAME}${pathname}`;
}

function logPass(label, detail) {
  console.log(`PASS ${label}${detail ? ` - ${detail}` : ""}`);
}

function logFail(label, detail) {
  console.log(`FAIL ${label}${detail ? ` - ${detail}` : ""}`);
}

async function checkRobots() {
  const result = await fetchText(`${DEFAULT_BASE_URL}/robots.txt`);
  const failures = [];

  if (result.status !== 200) {
    failures.push(`robots.txt returned ${result.status}`);
  }

  if (!/User-agent:\s*\*/i.test(result.text) || !/Allow:\s*\/\s*/i.test(result.text)) {
    failures.push("robots.txt is missing a global allow rule");
  }

  if (!/User-agent:\s*Googlebot-Image/i.test(result.text)) {
    failures.push("robots.txt is missing an explicit Googlebot-Image section");
  }

  if (!/Sitemap:\s*https:\/\/nwpremiumdesign\.com\/sitemap\.xml/i.test(result.text)) {
    failures.push("robots.txt is missing the production sitemap declaration");
  }

  return failures;
}

async function checkFavicons() {
  const failures = [];

  for (const asset of faviconChecks) {
    const result =
      asset.kind === "manifest"
        ? await fetchText(`${DEFAULT_BASE_URL}${asset.path}`)
        : await fetchBuffer(`${DEFAULT_BASE_URL}${asset.path}`);

    if (result.status !== 200) {
      failures.push(`${asset.label} returned ${result.status}`);
      continue;
    }

    if (asset.kind === "png") {
      const { width, height } = pngDimensions(result.buffer);
      if (width !== asset.width || height !== asset.height) {
        failures.push(
          `${asset.label} dimensions were ${width}x${height}, expected ${asset.width}x${asset.height}`
        );
      }

      const needsGoogleSizing =
        asset.path === "/favicon-48x48.png" ||
        asset.path === "/favicon-96x96.png" ||
        asset.path === "/favicon-192x192.png";

      if (width !== height) {
        failures.push(`${asset.label} is not square`);
      }

      if (needsGoogleSizing && (width < 48 || width % 48 !== 0)) {
        failures.push(`${asset.label} is not square and Google-eligible`);
      }
    }

    if (asset.kind === "manifest") {
      const manifest = JSON.parse(result.text);
      const manifestIcons = Array.isArray(manifest.icons) ? manifest.icons : [];
      const sizes = manifestIcons.map((icon) => icon.sizes);
      for (const expected of ["48x48", "96x96", "192x192", "180x180"]) {
        if (!sizes.includes(expected)) {
          failures.push(`site.webmanifest is missing ${expected}`);
        }
      }
    }
  }

  return failures;
}

async function checkPages(routes) {
  const reports = [];

  for (const route of routes) {
    const pathname = new URL(route).pathname;
    const result = await fetchText(`${DEFAULT_BASE_URL}${pathname}`);
    const failures = [];

    if (result.status !== 200) {
      failures.push(`returned ${result.status}`);
    }

    for (const pattern of expectedHeadPatterns) {
      if (!pattern.test(result.text)) {
        failures.push(`missing expected favicon head link ${pattern}`);
      }
    }

    const canonical = canonicalFromHtml(result.text);
    if (canonical !== expectedCanonical(pathname)) {
      failures.push(
        `canonical was ${canonical ?? "missing"}, expected ${expectedCanonical(pathname)}`
      );
    }

    if (includesNoindex(result.text)) {
      failures.push("page contains noindex");
    }

    for (const blockedPattern of blockedPatterns) {
      if (blockedPattern.test(result.text)) {
        failures.push(`contains blocked favicon reference ${blockedPattern}`);
      }
    }

    reports.push({ pathname, failures });
  }

  return reports;
}

async function main() {
  const sitemap = await fetchText(`${DEFAULT_BASE_URL}/sitemap.xml`);
  if (sitemap.status !== 200) {
    console.error(`FAIL sitemap.xml returned ${sitemap.status}`);
    process.exit(1);
  }

  const routes = parseSitemap(sitemap.text);
  if (routes.length === 0) {
    console.error("FAIL sitemap.xml did not contain any routes");
    process.exit(1);
  }

  console.log(`Checking ${routes.length} sitemap routes against ${DEFAULT_BASE_URL}`);

  const robotsFailures = await checkRobots();
  const faviconFailures = await checkFavicons();
  const pageReports = await checkPages(routes);

  if (robotsFailures.length === 0) {
    logPass("robots.txt", "allows Googlebot and Googlebot-Image");
  } else {
    robotsFailures.forEach((failure) => logFail("robots.txt", failure));
  }

  if (faviconFailures.length === 0) {
    logPass("favicon assets", "all required assets resolved and validated");
  } else {
    faviconFailures.forEach((failure) => logFail("favicon assets", failure));
  }

  for (const report of pageReports) {
    if (report.failures.length === 0) {
      logPass(report.pathname, "head links and canonical are correct");
    } else {
      report.failures.forEach((failure) => logFail(report.pathname, failure));
    }
  }

  const failureCount =
    robotsFailures.length +
    faviconFailures.length +
    pageReports.reduce((count, report) => count + report.failures.length, 0);

  if (failureCount > 0) {
    console.log(`\nFavicon audit failed with ${failureCount} issue(s).`);
    process.exit(1);
  }

  console.log(`\nFavicon audit passed for ${routes.length} routes.`);
}

main().catch((error) => {
  console.error(`FAIL fatal error - ${error.message}`);
  process.exit(1);
});
