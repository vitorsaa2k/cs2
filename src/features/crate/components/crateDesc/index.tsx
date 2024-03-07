import { CrateSkin } from "../../types/api";
import { CrateItem } from "./crateItem";
import { ItemsSkeleton } from "./itemsSkeleton";

export default function CrateDesc({ items }: { items?: CrateSkin[] }) {
	const invertedItems = items ? [...items].reverse() : null;
	return (
		<div>
			{invertedItems ? (
				<div className="flex flex-wrap justify-center max-w-7xl">
					{invertedItems.map((item, i) => {
						return (
							<div key={i}>
								<CrateItem item={item} />
							</div>
						);
					})}
				</div>
			) : (
				<ItemsSkeleton />
			)}
		</div>
	);
}
