import { PlayersOnline } from "./playersOnline";
import { TotalAccounts } from "./totalAccounts";
import { TotalBattles } from "./totalBattles";
import { TotalCrates } from "./totalCrates";
import { TotalUpgrades } from "./totalUpgrades";

export function HeaderInfo() {
	return (
		<div className="flex flex-col gap-5 md:flex-row">
			<PlayersOnline />
			<TotalAccounts />
			<TotalBattles />
			<TotalCrates />
			<TotalUpgrades />
		</div>
	);
}
