import { useCallback, useEffect, useState } from "react";
import { socket } from "../../../libs/socketIo";
import { LiveDropItem } from "../../../features/crate/types/api";
import { DropsRow } from "./dropsRow";
import { PiCrown, PiPackage } from "react-icons/pi";
export function DroppedSkins() {
	const [drops, setDrops] = useState<LiveDropItem[]>([]);
	const [bestDrops, setBestDrops] = useState<LiveDropItem[]>([]);
	const [shouldShowBestDrops, setShouldShowBestDrops] = useState(false);
	const [isToggleDisabled, setIsToggleDisabled] = useState(false);

	const addDrop = useCallback(
		({
			skinList,
			bestSkins,
		}: {
			skinList: LiveDropItem[];
			bestSkins: LiveDropItem[];
		}) => {
			setBestDrops(bestSkins.concat(bestDrops.slice(0, 20)));
			setDrops(skinList.concat(drops.slice(0, 20)));
		},
		[drops, bestDrops]
	);

	function toggleBestDropsFalse() {
		if (shouldShowBestDrops === true) {
			setShouldShowBestDrops(false);
			setIsToggleDisabled(true);
			setTimeout(() => {
				setIsToggleDisabled(false);
			}, 1000);
		}
	}
	function toggleBestDropsTrue() {
		if (shouldShowBestDrops === false) {
			setShouldShowBestDrops(true);
			setIsToggleDisabled(true);
			setTimeout(() => {
				setIsToggleDisabled(false);
			}, 1000);
		}
	}
	useEffect(() => {
		socket.connect();
		return () => {
			socket.disconnect();
		};
	}, []);
	useEffect(() => {
		socket.on("updateLiveDrop", addDrop);

		return () => {
			socket.off("updateLiveDrop", addDrop);
		};
	}, [addDrop]);
	return (
		<div className="flex overflow-hidden h-[124px]">
			<div className="flex flex-col items-center">
				<button
					className={`flex w-full h-full px-5 flex-col items-center justify-center hover:bg-white/25 ${
						shouldShowBestDrops ? "" : "bg-white/25"
					}`}
					disabled={isToggleDisabled}
					onClick={toggleBestDropsFalse}
				>
					<PiPackage />
					All
				</button>
				<button
					className={`flex w-full h-full px-5 flex-col items-center justify-center hover:bg-white/25 ${
						shouldShowBestDrops ? "bg-white/25" : ""
					}`}
					disabled={isToggleDisabled}
					onClick={toggleBestDropsTrue}
				>
					<PiCrown />
					Best
				</button>
			</div>
			<div className="w-full relative overflow-hidden">
				{shouldShowBestDrops ? (
					<DropsRow items={bestDrops} />
				) : (
					<DropsRow items={drops} />
				)}
			</div>
		</div>
	);
}
