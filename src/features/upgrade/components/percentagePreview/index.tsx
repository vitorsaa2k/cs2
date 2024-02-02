import { useCallback, useContext, useEffect, useState } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { getUpgradeChance } from "../../../../services/upgradeApi";
import { ActionTypes } from "../../contextTypes";
import { Circle } from "./circle";
import { useDebounce } from "../../../../hooks/useDebounce";

export function PercentagePreview() {
	const upgradeContext = useContext(UpgradeContext);
	const [IsFetching, setIsFetching] = useState(true);
	const fetchChance = useCallback(() => {
		setIsFetching(true);
		if (
			upgradeContext.state.skinsUpgrade.length === 0 ||
			upgradeContext.state.userSkins.length === 0
		) {
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_SUCCESS_CHANCE,
				payload: 0,
			});
			return;
		}
		getUpgradeChance(
			upgradeContext.state.userSkins,
			upgradeContext.state.skinsUpgrade
		).then(data => {
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_SUCCESS_CHANCE,
				payload: data > 100 ? 100 : data,
			});
			setIsFetching(false);
		});
		//disabling eslint due to specific needs
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [upgradeContext.state.skinsUpgrade, upgradeContext.state.userSkins]);
	const chaceDebounce = useDebounce(fetchChance, 400);

	useEffect(() => {
		chaceDebounce();
		//disabling eslint due to specific needs
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchChance]);

	return (
		<div className="flex relative items-center">
			{IsFetching && (
				<div className="w-[16rem] h-[16rem] absolute rounded-full animate-opacity-up bg-black/50 transition-all mx-6"></div>
			)}
			<Circle chance={upgradeContext.state.successChance} />
		</div>
	);
}
