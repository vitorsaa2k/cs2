import { useEffect, useState } from "react";
import { PlayersOnline } from "./playersOnline";
import { TotalAccounts } from "./totalAccounts";
import { TotalCrates } from "./totalCrates";
import { TotalUpgrades } from "./totalUpgrades";
import { socket } from "@/libs/socketIo";

export interface StatisticsData {
	totalCratesOpened: number;
	totalUsersCreated: number;
	totalUpgradesCompleted: number;
	lastUpdated: Date;
}

export function Metrics() {
	const [stats, setStats] = useState<StatisticsData>();

	useEffect(() => {
		socket.on("statistics", stats => setStats(stats));
	}, []);
	return (
		<div className="hidden gap-5 xl:flex absolute ml-[17rem] mt-[0.2rem]">
			<PlayersOnline />
			<TotalAccounts totalAccounts={stats?.totalUsersCreated} />
			{/* <TotalBattles /> */}
			<TotalCrates totalCrates={stats?.totalCratesOpened} />
			<TotalUpgrades totalUpgrades={stats?.totalUpgradesCompleted} />
		</div>
	);
}
