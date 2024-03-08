import { useParams, useSearchParams } from "react-router-dom";
import { CrateIcon } from "../features/crate/components/cratePresentation/crateIcon";
import { CrateName } from "../features/crate/components/cratePresentation/crateName";
import { Roller } from "../features/crate/components/roller";
import CrateDesc from "../features/crate/components/crateDesc";
import { useGetCrateById } from "../hooks/useQuery/crate";
import { CrateContextProvider } from "../features/crate/context/crateContext/crateContext";

export default function Crate() {
	const { name } = useParams();
	const [urlSearchParams] = useSearchParams();
	const crateId = urlSearchParams.get("crateId");
	const { data: crate } = useGetCrateById(crateId ?? "");

	return (
		<CrateContextProvider>
			<div className="flex flex-col items-center m-3">
				<CrateName name={name || "Crate Name"} />
				<CrateIcon img={crate?.img || ""} />
				<Roller skins={crate?.skins} />
				<CrateDesc items={crate?.skins} />
			</div>
		</CrateContextProvider>
	);
}
