import { PaymentTypes } from "../components/depositModal/types/payment";
import { instance } from "../libs/axios";

export async function createCheckout(
	method: PaymentTypes,
	amount: number,
	userId: string
) {
	return (
		await instance.post(`/checkout/${method.toLowerCase()}`, { amount, userId })
	).data;
}

export async function checkPayment(paymentId: string) {
	return (await instance.get(`/checkout/${paymentId}`)).data;
}
