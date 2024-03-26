import { ButtonHTMLAttributes, useContext, useMemo, useState } from "react";
import { useGetLoggedUser } from "../../../../hooks/useQuery/user";
import { useSearchParams } from "react-router-dom";
import { useGetCrateById } from "../../../../hooks/useQuery/crate";
import { CrateContext } from "../../context/crateContext/crateContext";
import { DepositModalContext } from "../../../../contexts/depositModalContext";
import { TailSpinner } from "../../../../components/spinner";
import { URL } from "../../../../libs/axios";
import { rollCrate } from "../../../../services/rollApi";
import { ActionTypes } from "../../types/crateContextTypes";
import { queryClient } from "../../../../libs/queryClient";
import { formatPrice } from "../../../../utils/formatPrice";
import { CRATE_ANIMATION_DELAY_MS } from "../../../../consts/crate";

export function OpenButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	const { state, dispatch } = useContext(CrateContext);
	const [isFetching, setIsFetching] = useState(false);
	const modal = useContext(DepositModalContext);
	const [urlSearchParams] = useSearchParams();
	const crateId = urlSearchParams.get("crateId");
	const { data: user } = useGetLoggedUser();
	const { data: crate } = useGetCrateById(crateId ?? "");
	const userHasBalance = useMemo(() => {
		if (user && crate) {
			return user.balance > state.totalCrates * crate.price ? true : false;
		}
		return false;
	}, [state.totalCrates, crate, user]);
	const remainigToOpen = useMemo(() => {
		if (user && crate) {
			return state.totalCrates * crate.price - user.balance;
		}
		return 0;
	}, [user, crate, state.totalCrates]);

	async function handleCrateOpening() {
		if (crateId) {
			setIsFetching(true);
			const skins = await rollCrate(crateId, state.totalCrates);
			dispatch({
				type: ActionTypes.OPEN_CRATE,
				payload: { crateId: crateId, skins },
			});
			queryClient.invalidateQueries({ queryKey: ["user"] });
			setTimeout(() => {
				setIsFetching(false);
			}, CRATE_ANIMATION_DELAY_MS);
		}
	}

	function handleClick() {
		if (!user) return handleNotLogged();
		if (!userHasBalance) return modal.setShowDepositModal(true);
		return handleCrateOpening();
	}

	function handleNotLogged() {
		window.location.href = `${URL}/auth/steam`;
	}
	if (!crateId) return <p>Error while getting crate id from UrlParams</p>;
	if (!crate) return <p>This crate doesnt exists</p>;
	return (
		<button
			{...props}
			className={`${
				user ? (userHasBalance ? "bg-green-800" : "bg-red-800") : "bg-red-800"
			} disabled:bg-green-950 items-center transition-all rounded flex justify-center min-w-[156px] p-2`}
			onClick={handleClick}
			disabled={state.drawnSkins !== null || isFetching}
		>
			{state.drawnSkins || isFetching ? (
				<TailSpinner height={24} width={30} visible />
			) : (
				`${
					(!user && "Login to open") ||
					(!userHasBalance && "Add to open") ||
					"OPEN"
				} 
					${
						user
							? (!userHasBalance && formatPrice(remainigToOpen)) ||
							  formatPrice(crate.price * state.totalCrates)
							: ""
					}`
			)}
		</button>
	);
}
