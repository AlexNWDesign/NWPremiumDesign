import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-kent");

export default function CabinetInstallationKentPage() {
  return renderServiceAreaPage("cabinet-installation-kent");
}
