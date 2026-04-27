import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-auburn");

export default function CabinetInstallationAuburnPage() {
  return renderServiceAreaPage("cabinet-installation-auburn");
}
