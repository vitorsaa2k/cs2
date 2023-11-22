import { useParams } from "react-router-dom";
import { CaseIcon } from "../features/case/components/casePresentation/caseIcon";
import { CaseName } from "../features/case/components/casePresentation/caseName";
import { Roller } from "../features/case/components/roller";
import { CaseDesc } from "../features/case/components/caseDesc";
import { useEffect, useState } from "react";
import { getItems } from "../services/caseApi";
import { CaseSkin } from "../features/case/types/api";

export function Case() {
	const { id } = useParams();
	const [items, setItems] = useState<CaseSkin[]>([
		{
			name: "",
			minRate: 0,
			maxRate: 0,
			price: 0,
			img: "",
		},
	]);

	useEffect(() => {
		id ? getItems(id).then(res => setItems(res.skins)) : null;
	}, [id]);

	return (
		<div className="flex flex-col items-center m-3">
			<CaseName name="Case Name" />
			<CaseIcon />
			<Roller />
			<CaseDesc items={items} />
		</div>
	);
}
