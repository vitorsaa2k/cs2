import { Dispatch, SetStateAction, useState } from "react";
import { CardPayment } from "./cardPayment";
import { SkinsPayment } from "./skinsPayment";
import { PaymentTypes } from "../types/payment";
import { ZenPayment } from "./zenPayment";
import { CryptoPayment } from "./cryptoPayment";
import { PaymentMethodBox } from "./paymentMethodBox";

export function PaymentMethod({
	setPaymentMethod,
}: {
	setPaymentMethod: Dispatch<SetStateAction<PaymentTypes>>;
}) {
	const [index, setIndex] = useState(0);
	function paymentMethod(method: PaymentTypes) {
		setPaymentMethod(method);
	}
	return (
		<div className="flex flex-col gap-2">
			<PaymentMethodBox
				index={0}
				method="Stripe"
				paymentMethod={paymentMethod}
				setIndex={setIndex}
			>
				<CardPayment index={index} />
			</PaymentMethodBox>
			<PaymentMethodBox
				index={1}
				method="Skins"
				paymentMethod={paymentMethod}
				setIndex={setIndex}
			>
				<SkinsPayment index={index} />
			</PaymentMethodBox>
			<PaymentMethodBox
				index={2}
				method="Zen"
				paymentMethod={paymentMethod}
				setIndex={setIndex}
			>
				<ZenPayment index={index} />
			</PaymentMethodBox>
			<PaymentMethodBox
				index={3}
				method="Crypto"
				paymentMethod={paymentMethod}
				setIndex={setIndex}
			>
				<CryptoPayment index={index} />
			</PaymentMethodBox>
		</div>
	);
}
