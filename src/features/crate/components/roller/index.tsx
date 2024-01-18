import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CrateSkin, DrawnSkin } from "../../types/api";
import { generateSkinsArray } from "../../../../utils/crate/generateSkinsArray";
import { rollCrate } from "../../../../services/rollApi";
import { RollerModal } from "./rollerModal";
import { CrateInteraction } from "../crateInteraction";
import { HorizontalRoller } from "./horizontalRoller";
import { VerticalRoller } from "./verticalRoller";
import { queryClient } from "../../../../libs/queryClient";

export function Roller({ skins }: { skins?: CrateSkin[] }) {
	const [searchParams] = useSearchParams();
	const [isRolling, setIsRolling] = useState(false);
	const [isFetching, setIsFetching] = useState(false);
	const [items, setItems] = useState<CrateSkin[]>([]);
	const [verticalItems, setVerticalItems] = useState<CrateSkin[][]>([[]]);
	const [showModal, setShowModal] = useState(false);
	const [crateNumber, setCrateNumber] = useState(1);
	const [drawnSkins, setDrawnSkins] = useState<DrawnSkin[]>([]);

	function resetAllSkinsArray() {
		if (skins) {
			const verticalSkins = [
				generateSkinsArray(skins),
				generateSkinsArray(skins),
				generateSkinsArray(skins),
				generateSkinsArray(skins),
				generateSkinsArray(skins),
			];
			setItems(generateSkinsArray(skins));
			setVerticalItems(verticalSkins);
		}
	}

	async function roll() {
		const crateId = searchParams.get("crateId");
		if (crateId) {
			setIsFetching(true);
			const skins = await rollCrate(crateId, crateNumber);
			const array = items;
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
			setIsFetching(false);
			queryClient.invalidateQueries({ queryKey: ["user"] });
		}, 8500);
		setIsRolling(true);
	}

	useEffect(() => {
		if (skins) {
			const verticalSkins = [
				generateSkinsArray(skins),
				generateSkinsArray(skins),
				generateSkinsArray(skins),
				generateSkinsArray(skins),
				generateSkinsArray(skins),
			];
			setItems(generateSkinsArray(skins));
			setVerticalItems(verticalSkins);
		}
	}, [skins]);
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
				disabled={isFetching}
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
