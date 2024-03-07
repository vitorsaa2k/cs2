import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CrateSkin } from "../../types/api";
import { rollCrate } from "../../../../services/rollApi";
import { RollerModal } from "./rollerModal";
import { CrateInteraction } from "../crateInteraction";
import { HorizontalRoller } from "./horizontalRoller";
import { VerticalRoller } from "./verticalRoller";
import { queryClient } from "../../../../libs/queryClient";
import { CrateContext } from "../../context/crateContext/crateContext";
import { ActionTypes } from "../../types/crateContextTypes";

export function Roller({ skins }: { skins?: CrateSkin[] }) {
	const [isFetching, setIsFetching] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [searchParams] = useSearchParams();
	const crateContext = useContext(CrateContext);

	async function roll() {
		const crateId = searchParams.get("crateId");
		if (crateId) {
			setIsFetching(true);
			const skins = await rollCrate(crateId, crateContext.state.totalCrates);
			crateContext.dispatch({
				type: ActionTypes.OPEN_CRATE,
				payload: { crateId: crateId, skins },
			});
			queryClient.invalidateQueries({ queryKey: ["user"] });
		}
		setTimeout(() => {
			setShowModal(true);
			setIsFetching(false);
		}, 8500);
	}
	useEffect(() => {
		if (skins) {
			crateContext.dispatch({
				type: ActionTypes.UPDATE_DEFAULT_SKINS,
				payload: skins,
			});
			crateContext.dispatch({ type: ActionTypes.RESET_ALL_SKINS });
		}
		//eslint-disable-next-line
	}, [skins]);
	return (
		<>
			<div className="w-full m-3 h-full gap-2 flex flex-col justify-center items-center overflow-hidden">
				{crateContext.state.totalCrates === 1 ? (
					<HorizontalRoller items={crateContext.state.horizontalSkins} />
				) : (
					<VerticalRoller
						crateNumber={crateContext.state.totalCrates}
						items={crateContext.state.verticalSkins}
					/>
				)}
				<CrateInteraction
					disabled={crateContext.state.drawnSkins !== null || isFetching}
					onClick={roll}
				/>
			</div>
			{showModal ? (
				<RollerModal
					closeModal={() => {
						setShowModal(false);
						crateContext.dispatch({ type: ActionTypes.RESET_ALL_SKINS });
						crateContext.dispatch({
							type: ActionTypes.UPDATE_DRAWN_SKINS,
							payload: null,
						});
					}}
					items={crateContext.state.drawnSkins || []}
				/>
			) : null}
		</>
	);
}
