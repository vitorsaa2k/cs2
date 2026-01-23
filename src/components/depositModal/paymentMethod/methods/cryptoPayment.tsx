import { cn } from "@/libs/utils";

export function CryptoPayment({ index }: { index: number }) {
	return (
		<div
			className={cn(
				`border flex justify-center items-center w-[250px] h-[150px]`,
				{
					"border-yellow-500": index === 3,
				},
			)}
		>
			<img src="https://key-drop.com/uploads/payment/methods/Crypto11.png?v120"></img>
		</div>
	);
}
