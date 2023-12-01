import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCrate } from "../../../../services/crateApi";
import { SkinType } from "../../types/api";
import { generateSkinsArray } from "../../../../utils/crate/generateSkinsArray";
import { rollCrate } from "../../../../services/rollApi";
import { RollerModal } from "./rollerModal";
import { UserContext } from "../../../../contexts/userContext";
import { URL } from "../../../../libs/axios";
import { CrateInteraction } from "../crateInteraction";
import { HorizontalRoller } from "./horizontalRoller";
import { VerticalRoller } from "./verticalRoller";

export function Roller() {
	const { name } = useParams();
	const [isRolling, setIsRolling] = useState(false);
	const [items, setItems] = useState<SkinType[]>([]);
	const [verticalItems, setVerticalItems] = useState<SkinType[][]>([[]]);
	const [showModal, setShowModal] = useState(false);
	const [crateNumber, setCrateNumber] = useState(1);
	const [drawnSkins, setDrawnSkins] = useState<SkinType[]>([]);

	const userContext = useContext(UserContext);

	function resetAllSkinsArray() {
		name
			? getCrate(name).then(res => {
					const verticalSkins = [
						generateSkinsArray(res.skins),
						generateSkinsArray(res.skins),
						generateSkinsArray(res.skins),
						generateSkinsArray(res.skins),
						generateSkinsArray(res.skins),
					];
					setItems(generateSkinsArray(res.skins));
					setVerticalItems(verticalSkins);
			  })
			: null;
	}

	async function roll() {
		if (userContext.user.id.length === 0) {
			window.location.href = `${URL}/auth/steam`;
		} else {
			if (name) {
				const skins = await rollCrate(name, userContext.user.id, crateNumber);
				const array = [...items];
				array[70] = skins[0];
				setDrawnSkins(skins);
				setItems(array);
				const verticalItemsClone = verticalItems;
				skins.forEach((skin, index) => {
					verticalItemsClone[index][70] = skin;
				});
				setVerticalItems(verticalItemsClone);
			}
			setTimeout(() => {
				setShowModal(true);
			}, 8500);
			setIsRolling(true);
		}
	}

	useEffect(() => {
		name
			? getCrate(name).then(res => {
					const verticalSkins = [
						generateSkinsArray(res.skins),
						generateSkinsArray(res.skins),
						generateSkinsArray(res.skins),
						generateSkinsArray(res.skins),
						generateSkinsArray(res.skins),
					];
					setItems(generateSkinsArray(res.skins));
					setVerticalItems(verticalSkins);
			  })
			: null;
	}, [name]);
	return (
		<div className="w-full m-3 h-full gap-2 flex flex-col justify-center items-center overflow-hidden">
			{crateNumber === 1 ? (
				<HorizontalRoller items={items} isRolling={isRolling} />
			) : (
				<VerticalRoller
					crateNumber={crateNumber}
					items={verticalItems}
					isRolling={isRolling}
				/>
			)}
			<CrateInteraction
				disabled={isRolling}
				onClick={roll}
				setCrateNumber={setCrateNumber}
				crateNumber={crateNumber}
			/>
			{showModal ? (
				<RollerModal
					closeModal={() => {
						setShowModal(false);
						setIsRolling(false);
						resetAllSkinsArray();
					}}
					items={drawnSkins}
				/>
			) : null}
		</div>
	);
}
