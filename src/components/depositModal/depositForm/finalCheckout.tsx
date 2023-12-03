import { TailSpinner } from "../../spinner";

export function FinalCheckout({
	amount,
	code,
	isSubmitting,
}: {
	amount: number;
	code: string;
	isSubmitting: boolean;
}) {
	async function getBonus() {
		//get bonus based on code provided
		//set if code is valid or not
	}
	return (
		<div className="border w-full flex flex-col items-center rounded p-2">
			<p>YOU GET</p>
			<p>${amount}</p>
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
