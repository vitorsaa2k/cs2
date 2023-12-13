export type CrateType = {
	name: string;
	limitRate: number;
	price: number;
	skins: SkinType[];
};
export type SkinType = {
	rollId: string;
	name: string;
	rarity_color: string;
	price: number;
	icon_url: string;
	classid: string;
	color: string;
	gun_type: string;
	exterior: string;
	minRate: number;
	maxRate: number;
	wear?: WearType[];
};
export type WearType = {
	wearType: string;
	wearRate: number;
};
