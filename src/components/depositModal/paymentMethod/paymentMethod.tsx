import { Dispatch, SetStateAction } from "react";
import { CardPayment } from "./methods/cardPayment";
import { SkinsPayment } from "./methods/skinsPayment";
import { PaymentTypes } from "../types/payment";
import { OthersPayment } from "./methods/zenPayment";
import { PaymentMethodBox } from "./paymentMethodBox";

export function PaymentMethod({
	paymentMethod,
	setPaymentMethod,
}: {
	paymentMethod: PaymentTypes;
	setPaymentMethod: Dispatch<SetStateAction<PaymentTypes>>;
}) {
	function updatePaymentMethod(method: PaymentTypes) {
		setPaymentMethod(method);
	}
	return (
		<div className="flex box-border gap-2">
			<PaymentMethodBox
				method="Stripe"
				paymentMethod={updatePaymentMethod}
				setPaymentMethod={setPaymentMethod}
				currentMethod={paymentMethod}
			>
				<CardPayment />
			</PaymentMethodBox>
			<PaymentMethodBox
				method="Skins"
				paymentMethod={updatePaymentMethod}
				setPaymentMethod={setPaymentMethod}
				currentMethod={paymentMethod}
			>
				<SkinsPayment />
			</PaymentMethodBox>
			<PaymentMethodBox
				method="Zen"
				paymentMethod={updatePaymentMethod}
				setPaymentMethod={setPaymentMethod}
				currentMethod={paymentMethod}
			>
				<OthersPayment />
			</PaymentMethodBox>
		</div>
	);
}
