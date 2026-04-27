import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-bellevue");

export default function CabinetInstallationBellevuePage() {
  return renderServiceAreaPage("cabinet-installation-bellevue");
}
