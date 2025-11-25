import { IconContext } from "react-icons";
import { DrawnSkin } from "../../types/api";
import { PiCaretDoubleUpBold, PiRepeat, PiShoppingCart } from "react-icons/pi";

export function Buttons({
	sellDrawnSkins,
	soldSkins,
	items,
	closeModal,
}: {
	sellDrawnSkins: (rollIds: string[]) => void;
	soldSkins: string[];
	items: DrawnSkin[];
	closeModal: () => void;
}) {
	const url = new URL(document.URL);
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
	return (
		<div className="flex justify-center flex-col items-center m-2 gap-3">
			<div className="flex max-md:flex-col items-center gap-3">
				{items.length > 1 ? (
					<button
						className="bg-green-font flex max-md:w-full justify-center disabled:bg-green-900 px-4 py-2 rounded"
						onClick={() => sellDrawnSkins(items.map(item => item.rollId))}
						disabled={soldSkins.length >= items.length}
					>
						<IconContext.Provider value={{ size: "24" }}>
							<PiShoppingCart />
						</IconContext.Provider>
						SELL ALL ${(allSkinsTotalValue - soldSkinsTotalValue).toFixed(2)}
					</button>
				) : null}
				<a
					className="bg-[#8B67AE] px-4 py-2 rounded flex gap-1 max-md:w-full justify-center"
					href={`${url.origin}/upgrade`}
				>
					<IconContext.Provider value={{ size: "24" }}>
						<PiCaretDoubleUpBold />
					</IconContext.Provider>
					GO TO UPGRADE
				</a>
			</div>
			<div className="flex justify-center w-full">
				<button
					onClick={closeModal}
					className="border px-4 py-2 flex gap-1 rounded max-md:w-full justify-center"
				>
					<IconContext.Provider value={{ size: "24" }}>
						<PiRepeat />
					</IconContext.Provider>
					TRY AGAIN
				</button>
			</div>
		</div>
	);
}
