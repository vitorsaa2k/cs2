import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TailSpinner } from "../../spinner";
import { getBonus } from "../../../services/paymentApi";
import { useDebounce } from "../../../hooks/useDebounce";
import { formatPrice } from "../../../utils/formatPrice";

export function FinalCheckout({
	amount,
	code,
	isSubmitting,
	setFinalAmount,
	finalAmount,
}: {
	amount: number;
	code: string;
	isSubmitting: boolean;
	setFinalAmount: Dispatch<SetStateAction<number>>;
	finalAmount: number;
}) {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateFinalAmount = async () => {
		setIsUpdating(true);
		await getBonus(code)
			.then(res => {
				setFinalAmount(amount * res.data.percentage + amount);
			})
			.catch(() => {
				setFinalAmount(amount);
			});
		setIsUpdating(false);
	};
	const debounceGetBonus = useDebounce(updateFinalAmount, 600);
	useEffect(() => {
		debounceGetBonus();
	}, [amount, code]);
	return (
		<div className="border w-full flex flex-col items-center rounded p-2">
			<p>YOU WILL GET</p>
			<p>
				{isUpdating ? (
					<TailSpinner height={24} width={24} visible />
				) : (
					`${formatPrice(finalAmount)}`
				)}
			</p>
			<p>MINIMUN TOP-UP AMOUNT: $2</p>
			<button
				className="bg-green-800 disabled:bg-green-900 w-full flex justify-center rounded p-2 m-2"
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<TailSpinner height={30} width={30} visible />
				) : (
					"Checkout"
				)}
			</button>
		</div>
	);
}
