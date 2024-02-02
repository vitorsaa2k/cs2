import { useCallback, useContext, useEffect, useState } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import { getSkinByRange } from "../../../../services/skinsApi";
import { useDebounce } from "../../../../hooks/useDebounce";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

export function InventoryPageControl() {
	const [page, setPage] = useState(1);
	const upgradeContext = useContext(UpgradeContext);
	const fetchSkins = useCallback(() => {
		getSkinByRange(maxPrice, page).then(data => {
			if (!data) return;
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_AVALIABLE_SKINS,
				payload: data,
			});
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_AVALIABLE_FETCH,
				payload: false,
			});
		});
		//eslint disabled due to specific needs
		//eslint-disable-next-line
	}, [page, upgradeContext.state.userSkins, upgradeContext.state.multiplier]);
	const fetchSkinsDebounce = useDebounce(fetchSkins, 500);

	const maxPrice =
		upgradeContext.state.userSkins
			.map(s => s.price)
			.reduce((prevValue, currValue) => prevValue + currValue, 0) *
		upgradeContext.state.multiplier;

	useEffect(() => {
		upgradeContext.dispatch({
			type: ActionTypes.UPDATE_AVALIABLE_FETCH,
			payload: true,
		});
		fetchSkinsDebounce();
		//eslint disabled due to specific needs
		//eslint-disable-next-line
	}, [fetchSkins]);
	return (
		<div className="flex justify-between m-3">
			<button
				disabled={page === 1}
				className="border rounded py-1 px-1 disabled:bg-black/50 disabled:border-white/25"
				onClick={() =>
					setPage(prevState => (prevState - 1 < 1 ? prevState : prevState - 1))
				}
			>
				<PiArrowLeft />
			</button>
			<p>{page}</p>
			<button
				className="border rounded py-1 px-1 disabled:bg-black/50 disabled:border-white/25"
				onClick={() => setPage(prevState => prevState + 1)}
			>
				<PiArrowRight />
			</button>
		</div>
	);
}
