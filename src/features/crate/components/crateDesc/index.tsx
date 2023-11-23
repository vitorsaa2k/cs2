import { CrateSkin } from "../../types/api";
import { CrateItem } from "./crateItem";

export function CrateDesc({ items }: { items: CrateSkin[] }) {
	return (
		<div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 min-[320px]:grid-cols-2">
			{items.map(item => {
				return (
					<div key={item.name}>
						<CrateItem img={item.img} itemName={item.name} price={item.price} />
					</div>
				);
			})}
		</div>
	);
}