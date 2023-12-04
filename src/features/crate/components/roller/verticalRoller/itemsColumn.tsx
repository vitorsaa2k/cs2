import { SkinType } from "../../../types/api";
import { RollerItem } from "./rollerItemVertical/rollerItemVertical";

export function ItemsColumn({ items }: { items: SkinType[] }) {
	return (
		<div className="w-full">
			{items.map((item, index) => {
				return (
					<div key={index}>
						<RollerItem item={item} />
					</div>
				);
			})}
		</div>
	);
}
