import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-seattle");

export default function CabinetInstallationSeattlePage() {
  return renderServiceAreaPage("cabinet-installation-seattle");
}
