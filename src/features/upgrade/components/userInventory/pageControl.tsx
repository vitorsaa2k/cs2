import { useContext, useEffect, useState } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import { useGetInventoryByPage } from "../../../../hooks/useQuery/inventory";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import { IconContext } from "react-icons";
import { NavigateButton } from "../pageControl/navigateButton";
import { PageControlWrapper } from "../pageControl/pageControlWrapper";
import { Page } from "../pageControl/page";

export function InventoryPageControl() {
	const [page, setPage] = useState(1);
	const [maxPages, setMaxPages] = useState(1);
	const upgradeContext = useContext(UpgradeContext);
	const { data: inventory } = useGetInventoryByPage(
		page,
		upgradeContext.state.userInventoryFilter
	);

	console.log(upgradeContext.state.userInventoryFilter);
	useEffect(() => {
		if (inventory) {
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_USER_INVENTORY,
				payload: inventory.inventory,
			});
			setMaxPages(inventory.pagination.maxPages);
		}
		//eslint disabled due to specific needs
		//eslint-disable-next-line
	}, [inventory, page, upgradeContext.state.userInventoryFilter]);
	return (
		<PageControlWrapper>
			<NavigateButton
				disabled={page === 1}
				onClick={() =>
					setPage(prevState => (prevState - 1 < 1 ? prevState : prevState - 1))
				}
			>
				<IconContext.Provider value={{ size: "24" }}>
					<PiArrowLeft />
				</IconContext.Provider>
			</NavigateButton>
			<Page page={page} maxPages={maxPages} />
			<NavigateButton
				disabled={page === maxPages}
				onClick={() => setPage(prevState => prevState + 1)}
			>
				<IconContext.Provider value={{ size: "24" }}>
					<PiArrowRight />
				</IconContext.Provider>
			</NavigateButton>
		</PageControlWrapper>
	);
}
