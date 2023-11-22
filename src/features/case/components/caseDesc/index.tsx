import { CaseSkin } from "../../types/api";
import { CaseItem } from "./caseItem";

export function CaseDesc({ items }: { items: CaseSkin[] }) {
	return (
		<div className="grid grid-cols-5">
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
