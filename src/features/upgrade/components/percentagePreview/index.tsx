import { useContext, useEffect } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { getUpgradeChance } from "../../../../services/upgradeApi";
import { ActionTypes } from "../../contextTypes";

export function PercentagePreview() {
	const upgradeContext = useContext(UpgradeContext);

	useEffect(() => {
		getUpgradeChance(
			upgradeContext.state.userSkins,
			upgradeContext.state.skinsUpgrade
		).then(data =>
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_SUCCESS_CHANCE,
				payload: data > 100 ? 100 : data,
			})
		);
		//disabling eslint due to specific needs
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [upgradeContext.state.skinsUpgrade, upgradeContext.state.userSkins]);

	return (
		<div className="flex items-center">
			<div className="w-[12rem] h-[12rem] border flex items-center justify-center rounded-full">
				<p className="">
					{upgradeContext.state.successChance?.toFixed(2) ?? 0}%
				</p>
			</div>
		</div>
	);
}
