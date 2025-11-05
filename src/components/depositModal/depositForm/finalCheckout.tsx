import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TailSpinner } from "../../spinner";
import { getBonus } from "../../../services/paymentApi";
import { useDebounce } from "../../../hooks/useDebounce";
import { formatPrice } from "../../../utils/formatPrice";

export function FinalCheckout({
	amount,
	code,
	isSubmitting,
	codePercentage,
	setCodePercentage,
}: {
	amount: number;
	code: string;
	isSubmitting: boolean;
	codePercentage: number;
	setCodePercentage: Dispatch<SetStateAction<number>>;
}) {
	const [isUpdating, setIsUpdating] = useState(false);

	const fetchCodeInfo = async () => {
		setIsUpdating(true);
		await getBonus(code)
			.then(res => {
				setCodePercentage(res.data.percentage);
			})
			.catch(() => {
				setCodePercentage(0);
			});
		setIsUpdating(false);
	};
	const debounceGetBonus = useDebounce(fetchCodeInfo, 600);
	useEffect(() => {
		debounceGetBonus();
	}, [code]);
	return (
		<div className="border w-full flex flex-col items-center rounded p-2 font-semibold">
			<p>YOU WILL GET</p>
			<p className="text-2xl">
				{isUpdating ? (
					<TailSpinner height={24} width={24} visible />
				) : (
					`${formatPrice(amount * codePercentage + amount)}`
				)}
			</p>
			<p className="text-xs text-white/60">MINIMUN TOP-UP AMOUNT: $2</p>
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
