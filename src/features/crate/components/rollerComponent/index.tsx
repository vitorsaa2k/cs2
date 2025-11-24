import { useContext, useEffect, useState } from "react";
import { CrateSkin } from "../../types/api";
import { RollerContainer } from "./rollerContainer";
import { CrateContext } from "../../context/crateContext/crateContext";
import { ActionTypes } from "../../types/crateContextTypes";
import { Pointer } from "./pointer";
import { DrawnSkinsModal } from "../drawnSkinsModal";
import { CRATE_ANIMATION_DELAY_MS } from "../../../../consts/crate";

export function RollerComponent({ skins }: { skins?: CrateSkin[] }) {
	const crateContext = useContext(CrateContext);
	const [showModal, setShowModal] = useState(false);
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
	useEffect(() => {
		if (crateContext.state.drawnSkins !== null) {
			setTimeout(() => {
				setShowModal(true);
			}, CRATE_ANIMATION_DELAY_MS);
		}
	}, [crateContext.state.drawnSkins]);
	return (
		<div className="relative my-12">
			{showModal && (
				<DrawnSkinsModal
					closeModal={() => {
						setShowModal(false);
						crateContext.dispatch({ type: ActionTypes.RESET_ALL_SKINS });
						crateContext.dispatch({
							type: ActionTypes.UPDATE_DRAWN_SKINS,
							payload: null,
						});
					}}
					items={crateContext.state.drawnSkins ?? []}
				/>
			)}
			<RollerContainer />
			<Pointer />
		</div>
	);
}
