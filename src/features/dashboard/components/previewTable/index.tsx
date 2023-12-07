import { useContext } from "react";
import { PreviewRow } from "./previewRow";
import { DashboardContext } from "../../../../contexts/dashboardContext";

export function PreviewTable() {
	const crate = useContext(DashboardContext);
	return (
		<div className="flex flex-col gap-2">
			{crate.crateSkins[0]?.classid.length === 0
				? null
				: crate.crateSkins.map((skin, index) => {
						return <PreviewRow key={index} skin={skin} />;
				  })}
		</div>
	);
}
