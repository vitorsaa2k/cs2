import { UserInventory } from "../userInventory";
import { AvaliableSkins } from "../avaliableSkins";

export function SkinsSection() {
	return (
		<div className="flex justify-center gap-4 m-4">
			<UserInventory />
			<AvaliableSkins />
		</div>
	);
}
