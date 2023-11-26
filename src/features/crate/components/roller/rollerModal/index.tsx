import { SkinType } from "../../../types/api";
import { PiX } from "react-icons/pi";
import { IconContext } from "react-icons";

type RollerModalType = {
	item: SkinType;
	closeModal: () => void;
};

export function RollerModal({ item, closeModal }: RollerModalType) {
	return (
		<div className="flex fixed top-0 right-0 left-0 bottom-0 justify-center bg-black/30 items-center w-full">
			<div className="relative rounded-lg shadow bg-gray-700">
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
				<div className="p-1 md:p-2 text-center flex items-center flex-col">
					<h3 className="font-normal text-gray-300">{item.name}</h3>
					<img src={item.img} />
				</div>
			</div>
		</div>
	);
}
