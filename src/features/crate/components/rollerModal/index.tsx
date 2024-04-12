import { DrawnSkin } from "../../types/api";
import { PiX } from "react-icons/pi";
import { IconContext } from "react-icons";
import { Modal } from "../../../../components/modal";
import { sellSkins } from "../../../../services/userApi";
import { useState } from "react";
import { queryClient } from "../../../../libs/queryClient";
import { DrawnSkinsList } from "./drawnSkinsList";

interface RollerModalType {
	items: DrawnSkin[];
	closeModal: () => void;
}

export function RollerModal({ items, closeModal }: RollerModalType) {
	const [soldSkins, setSoldItems] = useState<string[]>([]);
	const allSkinsTotalValue = Number(
		items
			.map(item => item.price ?? 0)
			.reduce((prevValue, currValue) => prevValue + currValue, 0)
	);
	const soldSkinsTotalValue = Number(
		items
			.filter(item => item.rollId === soldSkins.find(id => id === item.rollId))
			.map(item => item.price ?? 0)
			.reduce((prevValue, currValue) => prevValue + currValue, 0)
	);

	async function sellDrawnSkins(rollIds: string[]) {
		setSoldItems(prevState => [...prevState, ...rollIds]);
		await sellSkins(rollIds);
		queryClient.invalidateQueries({ queryKey: ["user"] });
	}
	return (
		<Modal>
			<div className="relative animate-slide-up rounded-lg shadow bg-gray-700">
				<div className="flex justify-end">
					<button
						className="hover:bg-gray-800 m-1 rounded"
						onClick={closeModal}
					>
						<IconContext.Provider value={{ size: "36" }}>
							<PiX />
						</IconContext.Provider>
					</button>
				</div>
				<DrawnSkinsList sellDrawnSkins={sellDrawnSkins} soldSkins={soldSkins} />
				{items.length > 1 ? (
					<div className="flex justify-center m-2">
						<button
							className="border border-green-800 disabled:border-green-950 px-2 py-1 rounded"
							onClick={() => sellDrawnSkins(items.map(item => item.rollId))}
							disabled={soldSkins.length >= items.length}
						>
							Sell all skins $
							{(allSkinsTotalValue - soldSkinsTotalValue).toFixed(2)}
						</button>
					</div>
				) : null}
			</div>
		</Modal>
	);
}
