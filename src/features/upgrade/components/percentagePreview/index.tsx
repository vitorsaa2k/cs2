import { useCallback, useContext, useEffect, useState } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { getUpgradeChance } from "../../../../services/upgradeApi";
import { ActionTypes } from "../../contextTypes";
import { Circle } from "./circle";
import { useDebounce } from "../../../../hooks/useDebounce";
import { Triangle } from "../triangle/triangle";

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
		<div className="w-[22rem] h-[22rem] flex relative lg:absolute top-[-16px] items-center justify-center bg-slate-900 rounded-full max-lg:mt-3 max-lg:order-3">
			{IsFetching && (
				<div className="w-[16rem] h-[16rem] absolute rounded-full animate-opacity-up bg-black/50 transition-all"></div>
			)}
			<div className="absolute z-10 flex flex-col items-center">
				<p className="text-4xl font-bold">
					{upgradeContext.state.successChance?.toFixed(2) ?? 0}%
				</p>
				<p>Chance</p>
			</div>
			<Circle chance={upgradeContext.state.successChance} />
			<div className="w-[15rem] h-[15rem] absolute rounded-full animate-opacity-up bg-black/70 transition-all"></div>
			<div className="w-[18.9rem] h-[18.9rem] absolute rounded-full animate-opacity-up border-2 border-white black transition-all"></div>
			<div className="w-[16rem] h-[16rem] absolute rounded-full transition-all border-dashed border-2"></div>
			<Triangle />
		</div>
	);
}
