import { MultiplierButton } from "./multiplierButton";

export function MultiplierControl() {
	return (
		<div className="flex gap-2">
			<MultiplierButton multiplier={1.5}></MultiplierButton>
			<MultiplierButton multiplier={2}></MultiplierButton>
			<MultiplierButton multiplier={5}></MultiplierButton>
			<MultiplierButton multiplier={10}></MultiplierButton>
			<MultiplierButton multiplier={20}></MultiplierButton>
		</div>
	);
}
