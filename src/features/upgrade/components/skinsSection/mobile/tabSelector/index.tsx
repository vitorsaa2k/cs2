import { Dispatch, SetStateAction } from "react";
import { TabSelectorButton } from "./button";

export type TabOptions = "userSkins" | "upgradeSkins";

export function TabSelector({
	currentTab,
	setCurrentTab,
}: {
	currentTab: TabOptions;
	setCurrentTab: Dispatch<SetStateAction<TabOptions>>;
}) {
	return (
		<div className="flex justify-between">
			<TabSelectorButton
				className="rounded-tl-lg"
				isSelected={currentTab === "userSkins"}
				onClick={() => setCurrentTab("userSkins")}
			>
				Your Items
			</TabSelectorButton>
			<TabSelectorButton
				className="rounded-tr-lg"
				isSelected={currentTab === "upgradeSkins"}
				onClick={() => setCurrentTab("upgradeSkins")}
			>
				Upgrade
			</TabSelectorButton>
		</div>
	);
}
