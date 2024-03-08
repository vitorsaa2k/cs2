import { UserType } from "../../../types/api";
import { formatPrice } from "../../../utils/formatPrice";
import { PlusButton } from "./plusButton";

export function UserBalance({ user }: { user: UserType }) {
	return (
		<button className="flex items-center text-green-font fill-green-font gap-3">
			<p>{formatPrice(user.balance)}</p>
			<PlusButton />
		</button>
	);
}
