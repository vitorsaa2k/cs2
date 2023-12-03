import { DepositHeader } from "./depositHeader";
import { createPortal } from "react-dom";
import { PaymentMethod } from "./paymentMethod/paymentMethod";
import { Modal } from "../modal";
import { useContext, useState } from "react";
import { PaymentTypes } from "./types/payment";
import { checkPayment, createCheckout } from "../../services/paymentApi";
import { UserContext } from "../../contexts/userContext";
import { DepositForm } from "./depositForm";
import { PiX } from "react-icons/pi";
import { IconContext } from "react-icons";

export function DepositModal({ onClose }: { onClose: () => void }) {
	const [paymentMethod, setPaymentMethod] = useState<PaymentTypes>("Stripe");
	const [amount, setAmount] = useState(2);
	const [code, setCode] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { user } = useContext(UserContext);
	async function goToCheckout() {
		setIsSubmitting(true);
		const req = await createCheckout(paymentMethod, amount, user.id);
		setIsSubmitting(false);
		window.open(req.url, "_blank")?.focus();
		setInterval(async () => {
			const payment = await checkPayment(req.id);
			if (payment.status === "paid") {
				window.location.reload();
			}
		}, 4000);
	}
	return (
		<>
			{createPortal(
				<Modal>
					<div className="mt-10 animate-slide-up bg-slate-700 p-5 rounded">
						<div className="relative">
							<DepositHeader />
							<button
								className="absolute right-0 translate-y-[-200%] hover:bg-slate-800 rounded"
								onClick={onClose}
							>
								<IconContext.Provider value={{ size: "32" }}>
									<PiX />
								</IconContext.Provider>
							</button>
						</div>
						<div className="flex gap-3">
							<PaymentMethod setPaymentMethod={setPaymentMethod} />
							<DepositForm
								isSubmitting={isSubmitting}
								amount={amount}
								code={code}
								setCode={setCode}
								goToCheckout={goToCheckout}
								setAmount={setAmount}
							/>
						</div>
					</div>
				</Modal>,
				document.getElementById("paymentModal-root")!
			)}
		</>
	);
}