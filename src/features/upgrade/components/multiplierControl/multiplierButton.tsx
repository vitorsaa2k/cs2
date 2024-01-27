import { HTMLAttributes, useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { ActionTypes } from "../../contextTypes";
import clsx from "clsx";

interface MultiplierButtonProps extends HTMLAttributes<HTMLButtonElement> {
	multiplier: 1.5 | 2 | 5 | 10 | 20;
}

export function MultiplierButton(props: MultiplierButtonProps) {
	const upgradeContext = useContext(UpgradeContext);

	function updateMultiplier() {
		upgradeContext.dispatch({
			type: ActionTypes.UPDATE_MULTIPLIER,
			payload: props.multiplier,
		});
	}

	return (
		<button
			disabled={upgradeContext.state.multiplier === props.multiplier}
			onClick={updateMultiplier}
			className={clsx("border p-2 rounded min-w-[4rem]", {
				"border-white/5": upgradeContext.state.multiplier === props.multiplier,
			})}
		>
			{props.multiplier} x
		</button>
	);
}
