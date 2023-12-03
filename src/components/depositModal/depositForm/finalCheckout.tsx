import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from "react";
import { TailSpinner } from "../../spinner";
import { getBonus } from "../../../services/paymentApi";

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

	const updateFinalAmount = useCallback(async () => {
		setIsUpdating(true);
		await getBonus(code)
			.then(res => {
				setFinalAmount(amount * res.data.percentage + amount);
			})
			.catch(() => {
				setFinalAmount(amount);
			});
		setTimeout(() => {
			setIsUpdating(false);
		}, 1000);
	}, [code, amount, setFinalAmount]);
	useEffect(() => {
		updateFinalAmount();
		return () => {};
	}, [updateFinalAmount]);
	return (
		<div className="border w-full flex flex-col items-center rounded p-2">
			<p>YOU GET</p>
			<p>
				{isUpdating ? (
					<TailSpinner height={24} width={24} visible />
				) : (
					`$${finalAmount}`
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
