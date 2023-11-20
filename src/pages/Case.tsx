import { useParams } from "react-router-dom";
import { CaseIcon } from "../features/case/components/casePresentation/caseIcon";
import { CaseName } from "../features/case/components/casePresentation/caseName";
import { Roller } from "../features/case/components/roller";

export function Case() {
	const { id } = useParams();

	return (
		<div className="flex flex-col items-center m-3">
			<CaseName name="Case Name" />
			<CaseIcon />
			<Roller />
			<div>{id}</div>
		</div>
	);
}
