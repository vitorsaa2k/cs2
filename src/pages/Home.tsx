import { Products } from "../features/products";

export function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			{" "}
			<Products />
		</div>
	);
}
