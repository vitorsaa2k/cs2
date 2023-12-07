import { useContext } from "react";
import { PreviewTable } from "./previewTable";
import { DashboardContext } from "../../../contexts/dashboardContext";

export function CratePreview() {
	const crate = useContext(DashboardContext);

	return (
		<div className="flex flex-col m-9 items-center justify-center min-w-[600px]">
			<p>Skins on the case</p>
			<div>
				<PreviewTable />
			</div>
			<p>Total Percentage: {crate.totalPercentage}%</p>
			<p
				className={`rounded ${
					crate.remainingPercentage < 0 ? "bg-red-900" : ""
				}`}
			>
				Remaining Percentage: {crate.remainingPercentage}%
			</p>
			<p>Crate Price: ${crate.cratePrice.toFixed(2)}</p>
		</div>
	);
}
