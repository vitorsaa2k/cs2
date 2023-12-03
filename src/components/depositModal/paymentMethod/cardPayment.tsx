export function CardPayment({ index }: { index: number }) {
	return (
		<div
			className={`border flex ${
				index === 0 ? "border-yellow-500" : ""
			} justify-center items-center w-[250px] h-[150px]`}
		>
			<img src="/mc_vrt_rev.svg" className="max-w-[100px] max-h-[100px]"></img>
			<img src="/visa-10.svg" className="max-w-[100px] max-h-[100px]"></img>
		</div>
	);
}
