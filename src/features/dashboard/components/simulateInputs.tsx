import { useContext, useState } from "react";
import { simulateCrateOpening } from "../../../services/crateApi";
import { DashboardContext } from "../../../contexts/dashboardContext";
import { TailSpinner } from "../../../components/spinner";

export function SimulateInputs() {
	const crate = useContext(DashboardContext);

	const [crateNumber, setCrateNumber] = useState(0);
	const [isFetching, setIsFetching] = useState(false);
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",

		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	});

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
			<p>
				Player Profit: {formatter.format(crate.simulationResults?.playerProfit)}
			</p>
			<p>
				Total Spent: {formatter.format(crate.simulationResults?.totalSpent)}
			</p>
			<p>
				Site Profit: {formatter.format(crate.simulationResults?.siteProfit)}
			</p>
		</div>
	);
}
