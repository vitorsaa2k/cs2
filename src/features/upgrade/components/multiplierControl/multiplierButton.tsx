import { ComponentProps, useContext } from "react";
import { UpgradeContext } from "../../../../contexts/upgradeContext";
import { PossibleMultipliers } from "../../contextTypes";

interface MultiplierButtonProps extends ComponentProps<"button"> {
	multiplier: PossibleMultipliers;
}

export function MultiplierButton(props: MultiplierButtonProps) {
	const upgradeContext = useContext(UpgradeContext);

	return (
		<button
			disabled={upgradeContext.state.multiplier === props.multiplier}
			{...props}
			className="rounded-lg md:py-3 px-5 h-full flex justify-center items-center font-bold disabled:text-black"
		>
			{props.multiplier}x
		</button>
	);
}
