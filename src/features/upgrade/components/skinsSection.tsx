import { UserInventory } from "./userInventory";
import { AvaliableSkins } from "./avaliableSkins";

export function SkinsSection() {
	return (
		<div className="flex justify-around">
			<UserInventory />
			<AvaliableSkins />
		</div>
	);
}
