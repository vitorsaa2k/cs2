import { useEffect, useState } from "react";
import { RollerContainer } from "./rollerContainer";
import { RollerInside } from "./rollerInside";
import { Line } from "./line";
import { useParams } from "react-router-dom";
import { getItems } from "../../../../services/caseApi";
import { CaseSkin } from "../../types/api";
import { generateSkinsArray } from "../../../../utils/case/generateSkinsArray";
import { rollCase } from "../../../../services/rollApi";

export function Roller() {
	const [isRolling, setIsRolling] = useState(false);
	const { id } = useParams();
	const [items, setItems] = useState<CaseSkin[]>([]);

	async function roll() {
		if (id) {
			const skin = await rollCase(id);
			const array = [...items];
			array[70] = skin;
			setItems(array);
		}
	}

	useEffect(() => {
		id
			? getItems(id).then(res => setItems(generateSkinsArray(res.skins)))
			: null;
	}, [id]);
	return (
		<div className="m-3 w-full h-full flex flex-col justify-center items-center">
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
				Open Case
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
