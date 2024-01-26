import { useContext, useEffect, useState } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import { getSkinByRange } from "../../../../services/skinsApi";

export function InventoryPageControl() {
	const [page, setPage] = useState(1);
	const upgradeContext = useContext(UpgradeContext);
	const maxPrice =
		upgradeContext.state.userSkins
			.map(s => s.price)
			.reduce((prevValue, currValue) => prevValue + currValue, 0) * 1.5;
	useEffect(() => {
		getSkinByRange(maxPrice, page).then(data =>
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_AVALIABLE_SKINS,
				payload: data,
			})
		);
		//eslint disabled due to specific needs
		//eslint-disable-next-line
	}, [page]);
	return (
		<div className="flex">
			<button
				onClick={() =>
					setPage(prevState => (prevState - 1 < 1 ? prevState : prevState - 1))
				}
			>
				{"<"}
			</button>
			<p>{`${page}`}</p>
			<button onClick={() => setPage(prevState => prevState + 1)}>{">"}</button>
		</div>
	);
}
