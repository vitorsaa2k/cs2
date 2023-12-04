import { Dispatch, SetStateAction } from "react";

export function AddAmount({
	amountToAdd,
	setAmount,
}: {
	amountToAdd: number;
	setAmount: Dispatch<SetStateAction<number>>;
}) {
	return (
		<button
			onClick={() => {
				setAmount(amountToAdd);
			}}
			type="button"
		>
			${amountToAdd}
		</button>
	);
}
