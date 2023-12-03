export function CryptoPayment({ index }: { index: number }) {
	return (
		<div
			className={`border flex ${
				index === 3 ? "border-yellow-500" : ""
			} justify-center items-center w-[250px] h-[150px]`}
		>
			<img
				src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=029"
				className="w-[50x] h-[50px]"
			></img>
			<img
				src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-diamond-purple.svg?v=029"
				className="w-[50px] h-[50px]"
			></img>
			<p className="text-lg font-medium">Crypto</p>
		</div>
	);
}
