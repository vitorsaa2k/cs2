import { UserInventory } from "./userInventory";
import { AvaliableSkins } from "./avaliableSkins";
import { SkinsSectionMobile } from "./mobile";

export function SkinsSection() {
	return (
		<>
			<div className="md:hidden w-full p-2 mt-6">
				<SkinsSectionMobile />
			</div>
			<div className="flex justify-center gap-4 m-4 max-md:hidden">
				<UserInventory />
				<AvaliableSkins />
			</div>
		</>
	);
}
