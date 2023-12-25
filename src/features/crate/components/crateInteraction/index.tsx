import { CrateInteractionProps } from "../../types/components";
import { PlusButton } from "./plusButton";
import { MinusButton } from "./minusButton";
import { TailSpinner } from "../../../../components/spinner";
import {
	useGetCrateByName,
	useGetLoggedUser,
} from "../../../../hooks/useQuery";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DepositModalContext } from "../../../../contexts/depositModalContext";
import { URL } from "../../../../libs/axios";

export function CrateInteraction(props: CrateInteractionProps) {
	const { name } = useParams();
	const { data: user } = useGetLoggedUser();
	const { data: crate } = useGetCrateByName(name ?? "");
	const modal = useContext(DepositModalContext);
	const userHasBalance =
		crate && user ? props.crateNumber * crate.price < user?.balance : null;
	const remainigToOpen =
		crate && user
			? userHasBalance
				? 0
				: Number((props.crateNumber * crate.price - user?.balance).toFixed(2))
			: 0;
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
				className={`${
					user ? (userHasBalance ? "bg-green-800" : "bg-red-800") : "bg-red-800"
				} disabled:bg-green-950 transition-all rounded flex justify-center min-w-[156px] p-2`}
				onClick={
					user
						? userHasBalance
							? props.onClick
							: () => modal.setShowDepositModal(true)
						: () => {
								window.location.href = `${URL}/auth/steam`;
						  }
				}
				disabled={props.disabled}
			>
				{props.disabled ? (
					<TailSpinner height={24} width={30} visible />
				) : (
					`${
						user
							? userHasBalance
								? "Open Case"
								: "Add to open"
							: "Login to open"
					} 
					${
						user
							? userHasBalance
								? crate
									? `$${crate.price * props.crateNumber}`
									: "$0.00"
								: `$${remainigToOpen}`
							: ""
					}`
				)}
			</button>
		</section>
	);
}
