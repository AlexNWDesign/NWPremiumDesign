import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-clyde-hill");

export default function CabinetInstallationClydeHillPage() {
  return renderServiceAreaPage("cabinet-installation-clyde-hill");
}
