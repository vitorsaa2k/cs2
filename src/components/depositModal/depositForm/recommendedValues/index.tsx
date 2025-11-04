import { Dispatch, SetStateAction } from "react";
import { AddAmount } from "../addAmountButton";

export function RecommendedValues({
	amount,
	setAmount,
}: {
	amount: number;
	setAmount: Dispatch<SetStateAction<number>>;
}) {
	return (
		<div className="flex justify-between w-full gap-2">
			<AddAmount currentAmount={amount} amountToAdd={5} setAmount={setAmount} />
			<AddAmount
				currentAmount={amount}
				amountToAdd={15}
				setAmount={setAmount}
			/>
			<AddAmount
				currentAmount={amount}
				amountToAdd={50}
				setAmount={setAmount}
			/>
			<AddAmount
				currentAmount={amount}
				amountToAdd={100}
				setAmount={setAmount}
			/>
		</div>
	);
}
