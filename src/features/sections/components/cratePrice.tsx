export function CratePrice({ price }: { price: number }) {
	return <p>${price.toFixed(2)}</p>;
}
