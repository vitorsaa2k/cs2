export function ProductPrice({ price }: { price: number }) {
	return <p>${price.toFixed(2)}</p>;
}
