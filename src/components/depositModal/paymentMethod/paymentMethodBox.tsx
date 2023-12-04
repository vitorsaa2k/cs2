import { Dispatch, ReactNode, SetStateAction } from "react";
import { PaymentTypes } from "../types/payment";

export function PaymentMethodBox({
	children,
	index,
	method,
	setIndex,
	paymentMethod,
}: {
	children: ReactNode;
	index: number;
	method: PaymentTypes;
	setIndex: Dispatch<SetStateAction<number>>;
	paymentMethod: (method: PaymentTypes) => void;
}) {
	return (
		<div
			onClick={() => {
				paymentMethod(method);
				setIndex(index);
			}}
			className="hover:cursor-pointer"
		>
			{children}
		</div>
	);
}
