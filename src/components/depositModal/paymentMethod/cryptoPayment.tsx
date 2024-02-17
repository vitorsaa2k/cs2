export function CryptoPayment({ index }: { index: number }) {
	return (
		<div
			className={`border flex ${
				index === 3 ? "border-yellow-500" : ""
			} justify-center items-center w-[250px] h-[150px]`}
		>
			<img src="https://key-drop.com/uploads/payment/methods/Crypto11.png?v120"></img>
		</div>
	);
}
