import { CrateInteractionProps } from "../../types/components";
import { PlusButton } from "./plusButton";
import { MinusButton } from "./minusButton";
import { useContext } from "react";
import { CrateContext } from "../../context/crateContext/crateContext";
import { ActionTypes } from "../../types/crateContextTypes";
import { OpenButton } from "./openButton";

export function CrateInteraction(props: CrateInteractionProps) {
	const crateContext = useContext(CrateContext);
	return (
		<section className="flex max-h-16 gap-7">
			<div className="flex items-center justify-center gap-6">
				<PlusButton
					disabled={props.disabled || crateContext.state.totalCrates === 5}
					onClick={() =>
						crateContext.dispatch({ type: ActionTypes.INCREASE_TOTAL_CRATES })
					}
				/>
				<p className="text-2xl">{crateContext.state.totalCrates}</p>
				<MinusButton
					disabled={props.disabled || crateContext.state.totalCrates === 1}
					onClick={() =>
						crateContext.dispatch({ type: ActionTypes.DECREASE_TOTAL_CRATES })
					}
				/>
			</div>
			<OpenButton />
		</section>
	);
}
