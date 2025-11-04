import { ChangeEvent, Dispatch, SetStateAction } from "react";

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
		<label className="w-full flex flex-col">
			<p>Amount</p>

			<input
				className="w-full outline-none p-2 bg-transparent border rounded border-slate-400 focus:border-white transition-all"
				placeholder="Amount to add"
				value={amount}
				onChange={handleAmountChange}
				type="text"
			/>
		</label>
	);
}
