import { useCallback, useContext, useEffect, useState } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import { getSkinByRange } from "../../../../services/skinsApi";
import { useDebounce } from "../../../../hooks/useDebounce";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import { PageControlWrapper } from "../pageControl/pageControlWrapper";
import { NavigateButton } from "../pageControl/navigateButton";
import { Page } from "../pageControl/page";
import { IconContext } from "react-icons";

export function UpgradeSkinsPageControl() {
	const [page, setPage] = useState(1);
	const [maxPages, setMaxPages] = useState(1);
	const upgradeContext = useContext(UpgradeContext);

	const fetchSkins = useCallback(() => {
		getSkinByRange(upgradeContext.state.avaliableSkinsFilter).then(data => {
			if (!data) return;
			setMaxPages(data.pagination.maxPages);
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_AVALIABLE_SKINS,
				payload: data.skins,
			});
			upgradeContext.dispatch({
				type: ActionTypes.UPDATE_AVALIABLE_FETCH,
				payload: false,
			});
		});
		//eslint disabled due to specific needs
		//eslint-disable-next-line
	}, [
		page,
		upgradeContext.state.userSkins,
		upgradeContext.state.multiplier,
		upgradeContext.state.avaliableSkinsFilter.maxPrice,
		upgradeContext.state.avaliableSkinsFilter.name,
		upgradeContext.state.avaliableSkinsFilter.page,
		upgradeContext.state.avaliableSkinsFilter.rarity,
		upgradeContext.state.avaliableSkinsFilter.sort,
	]);
	const fetchSkinsDebounce = useDebounce(fetchSkins, 500);

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
		<PageControlWrapper>
			<NavigateButton
				disabled={upgradeContext.state.avaliableSkinsFilter.page === 1}
				onClick={() => {
					const currentPage = upgradeContext.state.avaliableSkinsFilter.page;
					upgradeContext.dispatch({
						type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
						payload: {
							...upgradeContext.state.avaliableSkinsFilter,
							page: currentPage - 1 < 1 ? currentPage : currentPage - 1,
						},
					});
					setPage(prevState => (prevState - 1 < 1 ? prevState : prevState - 1));
				}}
			>
				<IconContext.Provider value={{ size: "24" }}>
					<PiArrowLeft />
				</IconContext.Provider>
			</NavigateButton>
			<Page
				page={upgradeContext.state.avaliableSkinsFilter.page}
				maxPages={maxPages}
			/>
			<NavigateButton
				disabled={upgradeContext.state.avaliableSkinsFilter.page === maxPages}
				onClick={() => {
					const currentPage = upgradeContext.state.avaliableSkinsFilter.page;
					upgradeContext.dispatch({
						type: ActionTypes.UPDATE_AVALIABLE_SKINS_FILTER,
						payload: {
							...upgradeContext.state.avaliableSkinsFilter,
							page: currentPage + 1,
						},
					});
					setPage(prevState => prevState + 1);
				}}
			>
				<IconContext.Provider value={{ size: "24" }}>
					<PiArrowRight />
				</IconContext.Provider>
			</NavigateButton>
		</PageControlWrapper>
	);
}
