import { Dispatch, SetStateAction } from "react";
import { BonusCode } from "./codeContainer";
import { AmountContainer } from "./amountContainer";
import { FinalCheckout } from "./finalCheckout";

export function DepositForm({
	setAmount,
	amount,
	goToCheckout,
	setCode,
	code,
	isSubmitting,
	setFinalAmount,
	finalAmount,
}: {
	setAmount: Dispatch<SetStateAction<number>>;
	amount: number;
	setFinalAmount: Dispatch<SetStateAction<number>>;
	finalAmount: number;
	goToCheckout: VoidFunction;
	setCode: Dispatch<SetStateAction<string>>;
	code: string;
	isSubmitting: boolean;
}) {
	return (
		<form
			className="flex flex-col gap-6 w-[600px] items-center"
			onSubmit={e => {
				e.preventDefault();
				goToCheckout();
			}}
		>
			<BonusCode code={code} setCode={setCode} />
			<AmountContainer amount={amount} setAmount={setAmount} />
			<FinalCheckout
				setFinalAmount={setFinalAmount}
				finalAmount={finalAmount}
				isSubmitting={isSubmitting}
				amount={amount}
				code={code}
			/>
		</form>
	);
}
