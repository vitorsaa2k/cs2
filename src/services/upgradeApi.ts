import { DrawnSkin, SkinType } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function upgrade(
	userSkins: DrawnSkin[],
	upgradeSkins: SkinType[]
) {
	return await instance
		.post<DrawnSkin[] | undefined>("/upgrade", { userSkins, upgradeSkins })
		.then(res => res.data);
}

export async function getUpgradeChance(
	userSkins: DrawnSkin[],
	upgradeSkins: SkinType[]
) {
	return await instance
		.post<number>("/upgrade/chance", { userSkins, upgradeSkins })
		.then(res => res.data);
}
