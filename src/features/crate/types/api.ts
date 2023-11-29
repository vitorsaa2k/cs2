export type CrateType = {
	name: string;
	limitRate: number;
	skins: SkinType[];
};
export type SkinType = {
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
