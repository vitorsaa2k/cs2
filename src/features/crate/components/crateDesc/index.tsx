import { CrateSkin } from "../../types/api";
import { CrateItem } from "./crateItem";
import { ItemsSkeleton } from "./itemsSkeleton";

export default function CrateDesc({ items }: { items?: CrateSkin[] }) {
	return (
		<div>
			{items ? (
				<div className="flex flex-wrap gap-4 justify-center max-w-7xl my-12">
					{items.map((item, i) => {
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
