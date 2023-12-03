export function ZenPayment({ index }: { index: number }) {
	return (
		<div
			className={`border flex ${
				index === 2 ? "border-yellow-500" : ""
			} justify-center p-3 w-[250px] h-[150px]`}
		>
			<img src="/zen logo white.svg"></img>
		</div>
	);
}
