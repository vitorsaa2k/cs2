import { Dispatch, SetStateAction, useState } from "react";
import { CardPayment } from "./cardPayment";
import { SkinsPayment } from "./skinsPayment";
import { PaymentTypes } from "../types/payment";
import { ZenPayment } from "./zenPayment";
import { CryptoPayment } from "./cryptoPayment";

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
			<div
				onClick={() => {
					setIndex(0);
					paymentMethod("Stripe");
				}}
			>
				<CardPayment index={index} />
			</div>
			<div
				onClick={() => {
					setIndex(1);
					paymentMethod("Skins");
				}}
			>
				<SkinsPayment index={index} />
			</div>
			<div
				onClick={() => {
					setIndex(2);
					paymentMethod("Zen");
				}}
			>
				<ZenPayment index={index} />
			</div>
			<div
				onClick={() => {
					setIndex(3);
					paymentMethod("Crypto");
				}}
			>
				<CryptoPayment index={index} />
			</div>
		</div>
	);
}
