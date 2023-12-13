import { CrateInteractionProps } from "../../types/components";
import { PlusButton } from "./plusButton";
import { MinusButton } from "./minusButton";
import { TailSpinner } from "../../../../components/spinner";
import { useGetCrateByName } from "../../../../hooks/useQuery";
import { useParams } from "react-router-dom";

export function CrateInteraction(props: CrateInteractionProps) {
	const { name } = useParams();
	const { data: crate } = useGetCrateByName(name ?? "");
	return (
		<section className="flex gap-7">
			<div className="flex items-center justify-center gap-1">
				<PlusButton
					disabled={props.disabled}
					onClick={() =>
						props.setCrateNumber(prevState =>
							prevState < 5 ? prevState + 1 : prevState + 0
						)
					}
				/>
				<MinusButton
					disabled={props.disabled}
					onClick={() =>
						props.setCrateNumber(prevState =>
							prevState >= 2 ? prevState - 1 : prevState - 0
						)
					}
				/>
				<p className="m-1 w-[8px]">{props.crateNumber}</p>
			</div>
			<button
				className="bg-green-800 disabled:bg-green-950 transition-all rounded flex justify-center min-w-[103px] p-2"
				onClick={props.onClick}
				disabled={props.disabled}
			>
				{props.disabled ? (
					<TailSpinner height={24} width={30} visible />
				) : (
					`Open Crate $${
						crate?.price ? crate?.price * props.crateNumber : "0.00"
					}`
				)}
			</button>
		</section>
	);
}
