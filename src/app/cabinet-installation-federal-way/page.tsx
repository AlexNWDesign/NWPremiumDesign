import type { Metadata } from "next";
import { buildServiceAreaMetadata, renderServiceAreaPage } from "@/app/serviceAreaPage";

export const metadata: Metadata = buildServiceAreaMetadata("cabinet-installation-federal-way");

export default function CabinetInstallationFederalWayPage() {
  return renderServiceAreaPage("cabinet-installation-federal-way");
}
