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
	image: string;
	wear: { name: Wear };
	rarity: {
		id: string;
		name: RarityNames;
		color: string;
	};
	weapon: {
		name: string;
		weapon_id: number;
	};
	category: {
		id: string;
		name: string;
	};
	pattern: {
		id: string;
		name: string;
	};
	market_hash_name: string;
	stattrak: boolean;
	price: number;
};

export type RarityNames =
	| "Consumer Grade"
	| "Industrial Grade"
	| "Mil-Spec Grade"
	| "Restricted"
	| "Classified"
	| "Covert"
	| "Extraordinary";

export type Wear =
	| "Factory New"
	| "Minimal Wear"
	| "Field-Tested"
	| "Well-Worn"
	| "Battle-Scarred";

export type WearType = {
	wearType: string;
	wearRate: number;
};
