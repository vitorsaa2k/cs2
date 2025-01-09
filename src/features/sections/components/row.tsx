import { Section } from "../../../types/api";
import { CrateInfo } from "./crateInfo";

export function ProductRow({ section }: { section: Section }) {
	return (
		<div className="m-4 w-[1120px] py-6 flex flex-col justify-center items-center bg-slate-950 rounded-2xl gap-4">
			<p className="text-2xl font-semibold">{section.name}</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
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
