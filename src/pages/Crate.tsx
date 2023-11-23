import { useParams } from "react-router-dom";
import { CrateIcon } from "../features/crate/components/cratePresentation/crateIcon";
import { CrateName } from "../features/crate/components/cratePresentation/crateName";
import { Roller } from "../features/crate/components/roller";
import { CrateDesc } from "../features/crate/components/crateDesc";
import { useEffect, useState } from "react";
import { getItems } from "../services/crateApi";
import { CrateSkin } from "../features/crate/types/api";

export function Crate() {
	const { id } = useParams();
	const [items, setItems] = useState<CrateSkin[]>([
		{
			name: "",
			minRate: 0,
			maxRate: 0,
			price: 0,
			img: "",
			color: "",
		},
	]);

	useEffect(() => {
		id ? getItems(id).then(res => setItems(res.skins)) : null;
	}, [id]);

	return (
		<div className="flex flex-col items-center m-3">
			<CrateName name="Crate Name" />
			<CrateIcon />
			<Roller />
			<CrateDesc items={items} />
		</div>
	);
}
