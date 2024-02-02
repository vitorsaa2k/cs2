import { useContext, useEffect, useState } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import { useGetInventoryByPage } from "../../../../hooks/useQuery/inventory";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

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
				disabled={upgradeContext.state.userInventory.length < 15}
				className="border rounded py-1 px-1 disabled:bg-black/50 disabled:border-white/25"
				onClick={() => setPage(prevState => prevState + 1)}
			>
				<PiArrowRight />
			</button>
		</div>
	);
}
