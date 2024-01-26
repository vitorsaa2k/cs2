import { useContext, useEffect, useState } from "react";
import { getUserInventoryByPage } from "../../../../services/userApi";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";

export function InventoryPageControl() {
	const [page, setPage] = useState(1);
	const upgradeContext = useContext(UpgradeContext);
	useEffect(() => {
		getUserInventoryByPage(page).then(data =>
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_USER_INVENTORY,
				payload: data.inventory,
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
			<p>{`${page} / ${upgradeContext.state.userInventory.length / 10}`}</p>
			<button onClick={() => setPage(prevState => prevState + 1)}>{">"}</button>
		</div>
	);
}
