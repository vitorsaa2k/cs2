import { useParams } from "react-router-dom";
import { CrateIcon } from "../features/crate/components/cratePresentation/crateIcon";
import { CrateName } from "../features/crate/components/cratePresentation/crateName";
import { Roller } from "../features/crate/components/roller";
import CrateDesc from "../features/crate/components/crateDesc";
import { useGetCrateByName } from "../hooks/useQuery";

export function Crate() {
	const { name } = useParams();
	const { data: crate } = useGetCrateByName(name ?? "");
	console.log(name);

	return (
		<div className="flex flex-col items-center m-3">
			<CrateName name={name || "Crate Name"} />
			<CrateIcon />
			<Roller skins={crate?.skins} />
			<CrateDesc items={crate?.skins} />
		</div>
	);
}
