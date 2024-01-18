import { Section } from "../../../types/api";
import { ProductInfo } from "./productInfo";

export function ProductRow({ section }: { section: Section }) {
	return (
		<div className="m-4 flex flex-col gap-4">
			<p>{section.name}</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
				{section.crates.map(crate => {
					return (
						<ProductInfo
							src={crate.img}
							crateId={crate.crateId}
							name={crate.name}
							price={crate.price}
						/>
					);
				})}
			</div>
		</div>
	);
}
