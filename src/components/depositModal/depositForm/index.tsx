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
}: {
	setAmount: Dispatch<SetStateAction<number>>;
	amount: number;
	goToCheckout: () => void;
	setCode: Dispatch<SetStateAction<string>>;
	code: string;
	isSubmitting: boolean;
}) {
	return (
		<form
			className="flex flex-col w-[600px] items-center"
			onSubmit={e => {
				e.preventDefault();
				goToCheckout();
			}}
		>
			<BonusCode code={code} setCode={setCode} />
			<AmountContainer amount={amount} setAmount={setAmount} />
			<FinalCheckout isSubmitting={isSubmitting} amount={amount} code={code} />
		</form>
	);
}
