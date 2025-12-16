import { DrawnSkin } from "../features/crate/types/api";

export type UserType = {
	provider: string;
	id: string;
	displayName: string;
	photo: string;
	identifier: string;
	balance: number;
};

export type InventoryType = {
	id: string;
	inventory: DrawnSkin[];
};

export type Section = {
	name: string;
	layoutVariant: string;
	crates: SectionCrate[];
};

export type SectionCrate = {
	crateId: string;
	name: string;
	price: number;
	isActive: boolean;
	img: string;
	isNew: boolean;
};
