import { useParams } from "react-router-dom";
import { CrateIcon } from "../features/crate/components/cratePresentation/crateIcon";
import { CrateName } from "../features/crate/components/cratePresentation/crateName";
import { Roller } from "../features/crate/components/roller";
import { useEffect, useState } from "react";
import { getCrate } from "../services/crateApi";
import { SkinType } from "../features/crate/types/api";
import CrateDesc from "../features/crate/components/crateDesc";

export function Crate() {
	const { name } = useParams();
	const [items, setItems] = useState<SkinType[]>([]);

	useEffect(() => {
		name ? getCrate(name).then(res => setItems(res.skins)) : null;
	}, [name]);

	return (
		<div className="flex flex-col items-center m-3">
			<CrateName name="Crate Name" />
			<CrateIcon />
			<Roller />
			<CrateDesc items={items} />
		</div>
	);
}
