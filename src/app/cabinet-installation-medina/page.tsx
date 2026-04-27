import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-medina");

export default function CabinetInstallationMedinaPage() {
  return renderServiceAreaPage("cabinet-installation-medina");
}
