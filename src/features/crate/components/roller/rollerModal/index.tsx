import { SkinType } from "../../../types/api";
import { PiX } from "react-icons/pi";
import { IconContext } from "react-icons";
import { decodeEntities } from "../../../../../utils/decodeHTML";
import { Modal } from "../../../../../components/modal";
import { sellSkins } from "../../../../../services/userApi";
import { useState } from "react";
import { queryClient } from "../../../../../libs/queryClient";

type RollerModalType = {
	items: SkinType[];
	closeModal: () => void;
};

export function RollerModal({ items, closeModal }: RollerModalType) {
	const [soldItems, setSoldItems] = useState<string[]>([]);
	const allSkinsTotalValue = Number(
		items
			.map(item => item.price ?? 0)
			.reduce((prevValue, currValue) => prevValue + currValue, 0)
	);
	const soldSkinsTotalValue = Number(
		items
			.filter(item => item.rollId === soldItems.find(id => id === item.rollId))
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
				<div className="p-1 md:p-2 text-center flex gap-2 items-center">
					{items.map(item => {
						return (
							<div
								key={item.rollId}
								className="flex flex-col items-center justify-center"
							>
								<h3 className="font-normal text-gray-300">
									{decodeEntities(item.name)}
								</h3>
								<img
									className="max-w-[200px]"
									src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
								/>
								<button
									className="border border-green-800 disabled:border-green-950 px-2 py-1 rounded"
									onClick={() => sellDrawnSkins([item.rollId])}
									disabled={soldItems.includes(item.rollId)}
								>
									Sell skin ${item.price}
								</button>
							</div>
						);
					})}
				</div>
				{items.length > 1 ? (
					<div className="flex justify-center m-2">
						<button
							className="border border-green-800 disabled:border-green-950 px-2 py-1 rounded"
							onClick={() => sellDrawnSkins(items.map(item => item.rollId))}
							disabled={soldItems.length >= items.length}
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
