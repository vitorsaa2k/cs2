import { DrawnSkin } from "../../types/api";
import { PiX } from "react-icons/pi";
import { IconContext } from "react-icons";
import { Modal } from "../../../../components/modal";
import { sellSkins } from "../../../../services/userApi";
import { useState } from "react";
import { queryClient } from "../../../../libs/queryClient";
import { DrawnSkinsList } from "./drawnSkinsList";
import { Buttons } from "./buttons";

interface RollerModalType {
	items: DrawnSkin[];
	closeModal: () => void;
}

export function DrawnSkinsModal({ items, closeModal }: RollerModalType) {
	const [soldSkins, setSoldItems] = useState<string[]>([]);

	async function sellDrawnSkins(rollIds: string[]) {
		setSoldItems(prevState => [...prevState, ...rollIds]);
		await sellSkins(rollIds);
		queryClient.invalidateQueries({ queryKey: ["user"] });
	}
	return (
		<Modal>
			<div className="relative animate-slide-up rounded-lg shadow bg-slate-900 md:p-12 p-10">
				<div className="absolute right-0 top-0 p-2">
					<button className="hover:bg-gray-800 rounded" onClick={closeModal}>
						<IconContext.Provider value={{ size: "36" }}>
							<PiX />
						</IconContext.Provider>
					</button>
				</div>
				<DrawnSkinsList sellDrawnSkins={sellDrawnSkins} soldSkins={soldSkins} />

				<Buttons
					items={items}
					sellDrawnSkins={sellDrawnSkins}
					soldSkins={soldSkins}
					closeModal={closeModal}
				/>
			</div>
		</Modal>
	);
}
