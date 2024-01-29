import { useContext, useEffect } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { getUpgradeChance } from "../../../../services/upgradeApi";
import { ActionTypes } from "../../contextTypes";
import { Circle } from "./circle";

export function PercentagePreview() {
	const upgradeContext = useContext(UpgradeContext);

	useEffect(() => {
		getUpgradeChance(
			upgradeContext.state.userSkins,
			upgradeContext.state.skinsUpgrade
		).then(data => {
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_SUCCESS_CHANCE,
				payload: data > 100 ? 100 : data,
			});
		});
		//disabling eslint due to specific needs
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [upgradeContext.state.skinsUpgrade, upgradeContext.state.userSkins]);

	return (
		<div className="flex relative items-center">
			<Circle chance={upgradeContext.state.successChance} />
			<div className="rounded-full"></div>
		</div>
	);
}
