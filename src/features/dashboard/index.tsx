import { CratePreview } from "./components/casePreview";
import { SimulateInputs } from "./components/simulateInputs";
import { SkinSearch } from "./components/skinSearch";

export function FullDashboard() {
	return (
		<div className="flex justify-around">
			<SkinSearch />
			<div>
				<CratePreview />
				<SimulateInputs />
			</div>
		</div>
	);
}
