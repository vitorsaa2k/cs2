import { ReactNode } from "react";

export function PaymentMethodBox({ children }: { children: ReactNode }) {
	return (
		<div className="border flex justify-center max-w-[300px] max-h-[200px]">
			{children}
		</div>
	);
}
