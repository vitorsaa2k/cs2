import { Section } from "../../../types/api";
import { CrateInfo } from "./crateInfo";

export function ProductRow({ section }: { section: Section }) {
	return (
		<div className="m-4 flex flex-col gap-4">
			<p>{section.name}</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
				{section.crates.map(crate => {
					return (
						<CrateInfo
							key={crate.crateId}
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
