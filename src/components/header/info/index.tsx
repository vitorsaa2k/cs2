import { PlayersOnline } from "./playersOnline";
import { TotalAccounts } from "./totalAccounts";
import { TotalBattles } from "./totalBattles";
import { TotalCases } from "./totalCases";
import { TotalUpgrades } from "./totalUpgrades";

export function HeaderInfo() {
	return (
		<div className="flex gap-5 ml-9">
			<PlayersOnline />
			<TotalAccounts />
			<TotalBattles />
			<TotalCases />
			<TotalUpgrades />
		</div>
	);
}
