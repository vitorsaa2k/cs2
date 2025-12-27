import { CrateType } from "../../features/crate/types/api";

export const crateMock: CrateType = {
	crateId: "1",
	name: "testCrate",
	img: "",
	price: 55,
	limitRate: 3,
	skins: [
		{
			price: 0.59,
			color: "Blue",
			minRate: 0,
			maxRate: 231510,
			name: "USP-S | Flashback (Field-Tested)",
			category: {
				id: "pistols_id",
				name: "Pistols",
			},
			image: "imgUrl",
			market_hash_name: "USP-S | Flashback (Field-Tested)",
			pattern: {
				id: "pattern_id_revenge",
				name: "Flashback",
			},
			rarity: {
				color: "#eb4b4b",
				id: "rarity_ancient_weapon",
				name: "Restricted",
			},
			weapon: {
				name: "USP-S",
				weapon_id: 12,
			},
			wear: {
				name: "Field-Tested",
			},
			stattrak: false,
		},
		{
			price: 19.7,
			color: "Red",
			minRate: 991379,
			maxRate: 995259,
			name: "AK-47 | Aquamarine Revenge (Battle-Scarred)",
			category: {
				id: "rifles_id",
				name: "Rifles",
			},
			image: "imgUrl",
			market_hash_name: "AK-47 | Aquamarine Revenge (Battle-Scarred)",
			pattern: {
				id: "pattern_id_revenge",
				name: "Aquamarine Revenge",
			},
			rarity: {
				color: "#eb4b4b",
				id: "rarity_ancient_weapon",
				name: "Covert",
			},
			weapon: {
				name: "Ak-47",
				weapon_id: 2,
			},
			wear: {
				name: "Battle-Scarred",
			},
			stattrak: false,
		},
	],
};
