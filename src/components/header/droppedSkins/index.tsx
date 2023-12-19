import { useCallback, useEffect, useState } from "react";
import { socket } from "../../../libs/socketIo";
import { SkinType } from "../../../features/crate/types/api";
import { DroppedSkin } from "./droppedSkin";

export function DroppedSkins() {
	const [recentSkins, setRecentSkins] = useState<SkinType[]>([]);
	const [recentBestSkins, setRecentBestSkins] = useState<SkinType[]>([]);

	const handleUpdateLiveDrop = useCallback(
		({
			skinList,
			bestSkins,
		}: {
			skinList: SkinType[];
			bestSkins: SkinType[];
		}) => {
			if (skinList) {
				setRecentSkins(skinList.concat(recentSkins));
			}
			if (bestSkins) {
				setRecentBestSkins(bestSkins.concat(recentBestSkins));
				console.log(bestSkins);
			}
		},
		[recentSkins, recentBestSkins]
	);

	useEffect(() => {
		socket.on("updateLiveDrop", handleUpdateLiveDrop);
		return () => {
			socket.off("updateLiveDrop", handleUpdateLiveDrop);
		};
	}, [handleUpdateLiveDrop]);

	return (
		<div className="flex border  border-black">
			<div className="border-r  border-black flex items-center justify-center">
				best skins
			</div>
			<div className="w-full min-h-[128px] border-black flex items-center justify-start">
				{recentSkins.map(skin => (
					<DroppedSkin key={skin.rollId} skin={skin} />
				))}
			</div>
		</div>
	);
}
