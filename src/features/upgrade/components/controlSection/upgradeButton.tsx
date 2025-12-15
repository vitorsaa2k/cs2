import { useContext, useState } from "react";
import { UpgradeContext } from "@/contexts/upgradeContext";
import { upgrade } from "@/services/upgradeApi";
import { ActionTypes } from "@/features/upgrade/contextTypes";
import { queryClient } from "@/libs/queryClient";
import { TailSpinner } from "@/components/spinner";

export function UpgradeButton() {
	const upgradeContext = useContext(UpgradeContext);
	const [isFetching, setIsFetching] = useState(false);

	async function excuteUpgrade() {
		setIsFetching(true);
		await upgrade(
			upgradeContext.state.userSkins,
			upgradeContext.state.skinsUpgrade
		).then(data => {
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_RESULT,
				payload: data ? true : false,
			});
			setTimeout(() => {
				setIsFetching(false);
				upgradeContext.dispatch({ type: ActionTypes.RESET_UPGRADER });
				queryClient.invalidateQueries({ queryKey: ["inventory"] });
			}, 8200);
		});
	}
	return (
		<button
			disabled={
				isFetching ||
				typeof upgradeContext.state.hasWon === "boolean" ||
				upgradeContext.state.userSkins.length === 0 ||
				upgradeContext.state.skinsUpgrade.length === 0
			}
			className="bg-green-font disabled:bg-green-950 px-12 py-6 rounded-lg font-bold text-2xl"
			onClick={excuteUpgrade}
		>
			{isFetching ? <TailSpinner height={24} width={68} visible /> : "Upgrade"}
		</button>
	);
}
