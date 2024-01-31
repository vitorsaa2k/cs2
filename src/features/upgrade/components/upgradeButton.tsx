import { useContext, useState } from "react";
import { UpgradeContext } from "../../../contexts/upgradeContext";
import { upgrade } from "../../../services/upgradeApi";
import { ActionTypes } from "../contextTypes";
import { queryClient } from "../../../libs/queryClient";
import { TailSpinner } from "../../../components/spinner";

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
			className="bg-green-800 disabled:bg-green-950 px-8 py-3 rounded"
			onClick={excuteUpgrade}
		>
			{isFetching ? <TailSpinner height={30} width={60} visible /> : "Upgrade"}
		</button>
	);
}
