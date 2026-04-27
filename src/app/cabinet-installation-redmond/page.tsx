import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-redmond");

export default function CabinetInstallationRedmondPage() {
  return renderServiceAreaPage("cabinet-installation-redmond");
}
