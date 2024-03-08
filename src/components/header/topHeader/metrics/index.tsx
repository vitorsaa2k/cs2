import { PlayersOnline } from "./playersOnline";
import { TotalAccounts } from "./totalAccounts";
import { TotalBattles } from "./totalBattles";
import { TotalCrates } from "./totalCrates";
import { TotalUpgrades } from "./totalUpgrades";

export function Metrics() {
	return (
		<div className="flex flex-col gap-5 md:flex-row absolute ml-[17rem] mt-[0.2rem]">
			<PlayersOnline />
			<TotalAccounts />
			<TotalBattles />
			<TotalCrates />
			<TotalUpgrades />
		</div>
	);
}
