import { DrawnSkin } from "../features/crate/types/api";

export type UserType = {
	provider: string;
	_json: {
		steamid: string;
		communityvisibilitystate: number;
		profilestate: number;
		personaname: string;
		commentpermission: number;
		profileurl: string;
		avatar: string;
		avatarmedium: string;
		avatarfull: string;
		avatarhash: string;
		lastlogoff: number;
		personastate: number;
		realname: string;
		primaryclanid: string;
		timecreated: number;
		personastateflags: number;
	};
	id: string;
	displayName: string;
	photos: {
		value: string;
	}[];
	identifier: string;
	balance: number;
};

export type InventoryType = {
	id: string;
	inventory: DrawnSkin[];
};
