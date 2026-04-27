import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-issaquah");

export default function CabinetInstallationIssaquahPage() {
  return renderServiceAreaPage("cabinet-installation-issaquah");
}
