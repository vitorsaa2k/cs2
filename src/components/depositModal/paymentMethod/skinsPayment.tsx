export function SkinsPayment({ index }: { index: number }) {
	return (
		<div
			className={`border flex ${
				index === 1 ? "border-yellow-500" : ""
			} justify-center w-[250px] h-[150px]`}
		>
			<img src="/Counter Strike 2.svg" className="w-[300px]"></img>
		</div>
	);
}
