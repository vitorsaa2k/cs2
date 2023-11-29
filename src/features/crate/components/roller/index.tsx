import { useContext, useEffect, useState } from "react";
import { RollerContainer } from "./rollerContainer";
import { RollerInside } from "./rollerInside";
import { Line } from "./line";
import { useParams } from "react-router-dom";
import { getCrate } from "../../../../services/crateApi";
import { SkinType } from "../../types/api";
import { generateSkinsArray } from "../../../../utils/crate/generateSkinsArray";
import { rollCrate } from "../../../../services/rollApi";
import { RollerModal } from "./rollerModal";
import { UserContext } from "../../../../contexts/userContext";
import { URL } from "../../../../libs/axios";

export function Roller() {
	const [isRolling, setIsRolling] = useState(false);
	const { id } = useParams();
	const [items, setItems] = useState<SkinType[]>([]);
	const [showModal, setShowModal] = useState(false);

	const userContext = useContext(UserContext);

	async function roll() {
		if (userContext.user.id.length === 0) {
			window.location.href = `${URL}/auth/steam`;
		} else {
			if (id) {
				const skin = await rollCrate(id, userContext.user.id);
				const array = [...items];
				array[70] = skin;
				setItems(array);
			}
			setTimeout(() => {
				setShowModal(true);
			}, 8500);
			setIsRolling(true);
		}
	}

	useEffect(() => {
		id
			? getCrate(id).then(res => setItems(generateSkinsArray(res.skins)))
			: null;
	}, [id]);
	return (
		<div className="w-full m-3 h-full gap-2 flex flex-col justify-center items-center overflow-hidden">
			<RollerContainer>
				<RollerInside isRolling={isRolling} items={items} />
				<Line />
			</RollerContainer>
			<button
				className="bg-green-800 disabled:bg-green-950 rounded p-2"
				disabled={isRolling}
				onClick={async () => {
					await roll();
				}}
			>
				Open Crate
			</button>
			{showModal ? (
				<RollerModal
					closeModal={() => {
						setShowModal(false);
						setIsRolling(false);
						setItems(generateSkinsArray(items));
					}}
					item={items[70]}
				/>
			) : null}
		</div>
	);
}
