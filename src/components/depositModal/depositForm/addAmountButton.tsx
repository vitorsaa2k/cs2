import { Dispatch, SetStateAction } from "react";
import { cn } from "../../../libs/utils";

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
			className={cn(
				"p-2 rounded hover:border-white border border-transparent w-full transition-all",
				{
					"border-white": amountToAdd === currentAmount,
				}
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
