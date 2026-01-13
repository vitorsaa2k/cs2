import { Section } from "../../../types/api";
import { CrateInfo } from "./crateInfo";

export function ProductRow({ section }: { section: Section }) {
	return (
		<div className="flex flex-col justify-center items-center bg-slate-950 sm:rounded-2xl p-3 gap-4 w-full max-w-[900px]">
			<p className="text-2xl font-semibold">{section.name}</p>
			<div className="flex flex-wrap max-md:justify-center gap-3 w-full">
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
