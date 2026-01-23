import { Dispatch, ReactNode, SetStateAction } from "react";
import { PaymentTypes } from "../types/payment";
import { cn } from "@/libs/utils";

export function PaymentMethodBox({
	children,
	method,
	paymentMethod,
	setPaymentMethod,
	currentMethod,
}: {
	children: ReactNode;
	method: PaymentTypes;
	setPaymentMethod: Dispatch<SetStateAction<PaymentTypes>>;
	paymentMethod: (method: PaymentTypes) => void;
	currentMethod: PaymentTypes;
}) {
	return (
		<div
			onClick={() => {
				paymentMethod(method);
				setPaymentMethod(method);
			}}
			className={cn(
				`border-slate-800 min-w-[124px] flex flex-col box-border border-2 p-8 rounded justify-center items-center`,
				{
					"border-white": method === currentMethod,
				},
			)}
		>
			{children}
		</div>
	);
}
