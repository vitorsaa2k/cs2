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
		);
		upgradeContext.dispatch({ type: ActionTypes.RESET_UPGRADER });
		queryClient.invalidateQueries({ queryKey: ["inventory"] });
	}
	return (
		<button className="bg-green-400 px-8 py-3 rounded" onClick={excuteUpgrade}>
			Upgrade
		</button>
	);
}
