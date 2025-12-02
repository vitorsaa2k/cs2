import { useContext, useEffect, useState } from "react";
import { cn } from "../../../../../../libs/utils";
import { UpgradeContext } from "../../../../../../contexts/upgradeContext";

export function ShowOnlySelectedButton() {
	const [shouldShowSelected, setShouldShowSelected] = useState<boolean>(false);
	const { state } = useContext(UpgradeContext);
	useEffect(() => {
		if (state.skinsUpgrade.length === 0) setShouldShowSelected(false);
	}, [state.skinsUpgrade.length]);
	return (
		<button
			disabled={state.skinsUpgrade.length === 0}
			onClick={() => setShouldShowSelected(prevState => !prevState)}
			className={cn(
				"bg-slate-900 p-2 border border-slate-900/40 rounded hover:cursor-pointer disabled:bg-slate-900/40 disabled:text-white/40",
				{
					"border border-green-font text-green-font": shouldShowSelected,
				}
			)}
		>
			Selected
		</button>
	);
}
