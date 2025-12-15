import { useState } from "react";
import { TabSelector } from "./tabSelector";
import { UserInventory } from "../userInventory";
import { AvaliableSkins } from "../avaliableSkins";
import { cn } from "../../../../../libs/utils";

export function SkinsSectionMobile() {
	const [currentTab, setCurrentTab] = useState<"userSkins" | "upgradeSkins">(
		"userSkins"
	);
	return (
		<div>
			<TabSelector currentTab={currentTab} setCurrentTab={setCurrentTab} />
			<div
				className={cn({
					hidden: currentTab === "userSkins",
				})}
			>
				<AvaliableSkins />
			</div>
			<div
				className={cn({
					hidden: currentTab === "upgradeSkins",
				})}
			>
				<UserInventory />
			</div>
		</div>
	);
}
