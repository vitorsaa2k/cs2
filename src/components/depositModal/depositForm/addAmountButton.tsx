import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export function AddAmount({
	currentAmount,
	amountToAdd,
	setAmount,
}: {
	currentAmount: number;
	amountToAdd: number;
	setAmount: Dispatch<SetStateAction<number>>;
}) {
	return (
		<button
			className={clsx(
				{
					"border-white": amountToAdd === currentAmount,
					"border-transparent": amountToAdd !== currentAmount,
				},
				"p-2 rounded hover:border-white border w-full transition-all"
			)}
			onClick={() => {
				setAmount(amountToAdd);
			}}
			type="button"
		>
			${amountToAdd}
		</button>
	);
}
