import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-renton");

export default function CabinetInstallationRentonPage() {
  return renderServiceAreaPage("cabinet-installation-renton");
}
