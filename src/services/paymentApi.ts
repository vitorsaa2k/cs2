import { PaymentTypes } from "../components/depositModal/types/payment";
import { instance } from "../libs/axios";

export async function createCheckout(
	method: PaymentTypes,
	amount: number,
	code: string
) {
	return (
		await instance.post(`/checkout/${method.toLowerCase()}`, {
			amount,
			code,
		})
	).data;
}

export async function checkPayment(paymentId: string) {
	return (await instance.get(`/checkout/${paymentId}`)).data;
}

export async function getBonus(code: string) {
	return await instance.get(`/checkout/bonus/${code}`);
}
