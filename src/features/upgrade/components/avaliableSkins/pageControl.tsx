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
			<Page page={page} />
			<NavigateButton onClick={() => setPage(prevState => prevState + 1)}>
				<IconContext.Provider value={{ size: "24" }}>
					<PiArrowRight />
				</IconContext.Provider>
			</NavigateButton>
		</PageControlWrapper>
	);
}
