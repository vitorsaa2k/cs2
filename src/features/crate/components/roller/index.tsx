import { useEffect, useState } from "react";
import { RollerContainer } from "./rollerContainer";
import { RollerInside } from "./rollerInside";
import { Line } from "./line";
import { useParams } from "react-router-dom";
import { getCrate } from "../../../../services/crateApi";
import { CrateSkin } from "../../types/api";
import { generateSkinsArray } from "../../../../utils/crate/generateSkinsArray";
import { rollCrate } from "../../../../services/rollApi";

export function Roller() {
	const [isRolling, setIsRolling] = useState(false);
	const { id } = useParams();
	const [items, setItems] = useState<CrateSkin[]>([]);

	async function roll() {
		if (id) {
			const skin = await rollCrate(id);
			const array = [...items];
			array[70] = skin;
			setItems(array);
		}
	}

	useEffect(() => {
		id
			? getCrate(id).then(res => setItems(generateSkinsArray(res.skins)))
			: null;
	}, [id]);
	return (
		<div className="w-full m-3 h-full flex flex-col justify-center items-center overflow-hidden">
			<RollerContainer>
				<RollerInside isRolling={isRolling} items={items} />
				<Line />
			</RollerContainer>
			<button
				onClick={async () => {
					await roll();
					setIsRolling(true);
				}}
			>
				Open Crate
			</button>
			<button
				onClick={() => {
					setIsRolling(false);
				}}
			>
				Reset
			</button>
		</div>
	);
}
