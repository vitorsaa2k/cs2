import { useContext, useEffect, useState } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import { useGetInventoryByPage } from "../../../../hooks/useQuery/inventory";

export function InventoryPageControl() {
	const [page, setPage] = useState(1);
	const upgradeContext = useContext(UpgradeContext);
	const { data: inventory } = useGetInventoryByPage(page);
	useEffect(() => {
		if (inventory) {
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_USER_INVENTORY,
				payload: inventory.inventory,
			});
		}
		//eslint disabled due to specific needs
		//eslint-disable-next-line
	}, [inventory]);
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
