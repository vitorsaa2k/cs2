import { CaseSkin } from "../../types/api";
import { CaseItem } from "./caseItem";

export function CaseDesc({ items }: { items: CaseSkin[] }) {
	return (
		<div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 min-[320px]:grid-cols-2">
			{items.map(item => {
				return (
					<div key={item.name}>
						<CaseItem img={item.img} itemName={item.name} price={item.price} />
					</div>
				);
			})}
		</div>
	);
}
