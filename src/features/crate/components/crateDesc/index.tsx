import { decodeEntities } from "../../../../utils/decodeHTML";
import { SkinType } from "../../types/api";
import { CrateItem } from "./crateItem";
import { ItemsSkeleton } from "./itemsSkeleton";

export default function CrateDesc({ items }: { items: SkinType[] }) {
	const invertedItems = [...items].reverse();
	return (
		<div>
			{invertedItems.length > 0 ? (
				<div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 min-[320px]:grid-cols-2">
					{invertedItems.map(item => {
						return (
							<div key={item.name}>
								<CrateItem
									img={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
									name={decodeEntities(item.name)}
									price={item.price}
								/>
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
