export type CrateType = {
	crateId: string;
	name: string;
	img: string;
	limitRate: number;
	price: number;
	skins: CrateSkin[];
};

export type CrateSkin = SkinType & {
	minRate: number;
	maxRate: number;
	color: string;
};

export type DrawnSkin = CrateSkin & {
	rollId: string;
};

export type LiveDropItem = DrawnSkin & {
	rollId: string;
	userId: string;
	userIcon: string;
	userDisplayName: string;
};

export type SkinType = {
	name: string;
	marketable: number;
	tradable: number;
	classid: string;
	icon_url: string;
	icon_url_large: string;
	type: string;
	weapon_type: string;
	gun_type: string;
	exterior: string;
	rarity: string;
	rarity_color: string;
	price: number;
};
export type WearType = {
	wearType: string;
	wearRate: number;
};
