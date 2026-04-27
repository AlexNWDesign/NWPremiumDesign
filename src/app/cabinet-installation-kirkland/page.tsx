import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-kirkland");

export default function CabinetInstallationKirklandPage() {
  return renderServiceAreaPage("cabinet-installation-kirkland");
}
