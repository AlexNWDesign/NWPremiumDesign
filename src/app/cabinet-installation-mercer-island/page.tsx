import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-mercer-island");

export default function CabinetInstallationMercerIslandPage() {
  return renderServiceAreaPage("cabinet-installation-mercer-island");
}
