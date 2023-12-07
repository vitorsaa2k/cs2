export type SkinCrate = {
	name: string;
	price: number;
	icon_url: string;
	classid: string;
	exterior: string;
	chance: number;
};

export type CrateSimulation = {
	name: string;
	limitRate: number;
	price: number;
	skins: SkinCrate[];
};
