import { CrateInteractionProps } from "../../types/components";
import { PlusButton } from "./plusButton";
import { MinusButton } from "./minusButton";

export function CrateInteraction(props: CrateInteractionProps) {
	return (
		<section className="flex gap-7">
			<div className="flex items-center justify-center gap-1">
				<PlusButton
					onClick={() =>
						props.setCrateNumber(prevState =>
							prevState < 5 ? prevState + 1 : prevState + 0
						)
					}
				/>
				<MinusButton
					onClick={() =>
						props.setCrateNumber(prevState =>
							prevState >= 2 ? prevState - 1 : prevState - 0
						)
					}
				/>
				<p>{props.crateNumber}</p>
			</div>
			<button
				className="bg-green-800 disabled:bg-green-950 rounded p-2"
				onClick={props.onClick}
				disabled={props.disabled}
			>
				Open Crate
			</button>
		</section>
	);
}
