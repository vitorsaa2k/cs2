import { useContext, useState } from "react";
import { simulateCrateOpening } from "../../../services/crateApi";
import { DashboardContext } from "../../../contexts/dashboardContext";
import { TailSpinner } from "../../../components/spinner";

export function SimulateInputs() {
	const crate = useContext(DashboardContext);

	const [crateNumber, setCrateNumber] = useState(0);
	const [isFetching, setIsFetching] = useState(false);

	async function simulateOpening() {
		setIsFetching(true);
		const req = await simulateCrateOpening(
			{
				name: "Simulated",
				limitRate: 1000000,
				price: Number(crate.cratePrice.toFixed(2)),
				skins: crate.crateSkins,
			},
			crateNumber
		);
		crate.setSimulationResults(req);
		setIsFetching(false);
		console.log(req);
	}

	return (
		<div className="flex flex-col gap-3 m-2 justify-center items-center">
			<label>
				Total Crates To Open:
				<input
					value={crateNumber}
					type="number"
					className="bg-transparent text-center w-full outline-none p-1 border-b"
					placeholder="$"
					onChange={e => setCrateNumber(Number(e.currentTarget.value))}
				/>
			</label>
			<button onClick={simulateOpening} className="bg-green-900 p-4 rounded">
				{isFetching ? (
					<TailSpinner height={30} width={30} visible />
				) : (
					"Simulate Opening"
				)}
			</button>
			<p>Player Profit: {crate.simulationResults?.playerProfit.toFixed(2)}</p>
			<p>Total Spent: {crate.simulationResults?.totalSpent.toFixed(2)}</p>
			<p>Site Profit: {crate.simulationResults?.siteProfit.toFixed(2)}</p>
		</div>
	);
}
