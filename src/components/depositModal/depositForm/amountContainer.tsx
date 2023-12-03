import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { AddAmount } from "./addAmountButton";

export function AmountContainer({
	amount,
	setAmount,
}: {
	amount: number;
	setAmount: Dispatch<SetStateAction<number>>;
}) {
	const numberRegex = /^[0-9]*$/;

	function handleAmountChange(e: ChangeEvent<HTMLInputElement>) {
		const { value } = e.currentTarget;
		numberRegex.test(value) ? setAmount(Number(value)) : null;
	}
	return (
		<label className="border w-full flex flex-col items-center rounded p-2">
			<p>Amount</p>
			<div className="flex gap-2">
				<AddAmount amountToAdd={5} setAmount={setAmount} />
				<AddAmount amountToAdd={15} setAmount={setAmount} />
				<AddAmount amountToAdd={50} setAmount={setAmount} />
				<AddAmount amountToAdd={100} setAmount={setAmount} />
			</div>
			<input
				className="w-full outline-none p-1 bg-transparent border-b"
				placeholder="Bonus Code"
				value={amount}
				onChange={handleAmountChange}
				type="text"
			/>
		</label>
	);
}
