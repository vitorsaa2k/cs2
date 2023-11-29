import { UserInfo } from "./userInfo";
import { UserInventory } from "./userInventory";

export function FullProfile() {
	return (
		<div className="flex flex-col items-center justify-center">
			<UserInfo />
			<UserInventory />
		</div>
	);
}
