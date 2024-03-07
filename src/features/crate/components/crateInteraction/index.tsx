import { CrateInteractionProps } from "../../types/components";
import { PlusButton } from "./plusButton";
import { MinusButton } from "./minusButton";
import { TailSpinner } from "../../../../components/spinner";
import { useGetCrateById } from "../../../../hooks/useQuery/crate";
import { useGetLoggedUser } from "../../../../hooks/useQuery/user";
import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import { DepositModalContext } from "../../../../contexts/depositModalContext";
import { URL } from "../../../../libs/axios";
import { CrateContext } from "../../context/crateContext/crateContext";
import { ActionTypes } from "../../types/crateContextTypes";

export function CrateInteraction(props: CrateInteractionProps) {
	const [urlSearchParams] = useSearchParams();
	const crateContext = useContext(CrateContext);
	const crateId = urlSearchParams.get("crateId");
	const { data: user } = useGetLoggedUser();
	const { data: crate } = useGetCrateById(crateId ?? "");
	const modal = useContext(DepositModalContext);
	const userHasBalance =
		crate && user
			? crateContext.state.totalCrates * crate.price < user?.balance
			: null;
	const remainigToOpen =
		crate && user
			? userHasBalance
				? 0
				: Number(
						(
							crateContext.state.totalCrates * crate.price -
							user?.balance
						).toFixed(2)
				  )
			: 0;
	return (
		<section className="flex gap-7">
			<div className="flex items-center justify-center gap-1">
				<PlusButton
					disabled={props.disabled || crateContext.state.totalCrates === 5}
					onClick={() =>
						crateContext.dispatch({ type: ActionTypes.INCREASE_TOTAL_CRATES })
					}
				/>
				<MinusButton
					disabled={props.disabled || crateContext.state.totalCrates === 1}
					onClick={() =>
						crateContext.dispatch({ type: ActionTypes.DECREASE_TOTAL_CRATES })
					}
				/>
				<p className="m-1 w-[8px]">{crateContext.state.totalCrates}</p>
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
									? `$${crate.price * crateContext.state.totalCrates}`
									: "$0.00"
								: `$${remainigToOpen}`
							: ""
					}`
				)}
			</button>
		</section>
	);
}
