import { SkinType } from "../../../types/api";
import { PiX } from "react-icons/pi";
import { IconContext } from "react-icons";
import { decodeEntities } from "../../../../../utils/decodeHTML";
import { Modal } from "../../../../../components/modal";

type RollerModalType = {
	items: SkinType[];
	closeModal: () => void;
};

export function RollerModal({ items, closeModal }: RollerModalType) {
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
							<div className="flex flex-col items-center justify-center">
								<h3 className="font-normal text-gray-300">
									{decodeEntities(item.name)}
								</h3>
								<img
									className="max-w-[200px]"
									src={`https://steamcommunity-a.akamaihd.net/economy/image/${item.icon_url}`}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</Modal>
	);
}
