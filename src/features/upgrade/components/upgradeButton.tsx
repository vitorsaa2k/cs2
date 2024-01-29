import { useContext } from "react";
import { UpgradeContext } from "../../../contexts/upgradeContext";
import { upgrade } from "../../../services/upgradeApi";
import { ActionTypes } from "../contextTypes";
import { queryClient } from "../../../libs/queryClient";

export function UpgradeButton() {
	const upgradeContext = useContext(UpgradeContext);

	async function excuteUpgrade() {
		await upgrade(
			upgradeContext.state.userSkins,
			upgradeContext.state.skinsUpgrade
		).then(data => {
			console.log(data);
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_RESULT,
				payload: data ? true : false,
			});
			setTimeout(() => {
				upgradeContext.dispatch({ type: ActionTypes.RESET_UPGRADER });
				queryClient.invalidateQueries({ queryKey: ["inventory"] });
			}, 8200);
		});
	}
	return (
		<button className="bg-green-900 px-8 py-3 rounded" onClick={excuteUpgrade}>
			Upgrade
		</button>
	);
}
