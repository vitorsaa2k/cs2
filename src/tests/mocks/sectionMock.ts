import { Section } from "../../types/api";

export const sectionMock = [
	{
		name: "Featured Crates",
		layoutVariant: "grid",
		crates: [
			{
				crateId: "1",
				name: "Crate 1",
				price: 9.99,
				isActive: true,
				img: "/path/to/crate1.png",
				isNew: true,
			},
			{
				crateId: "2",
				name: "Crate 2",
				price: 14.99,
				isActive: true,
				img: "/path/to/crate2.png",
				isNew: false,
			},
		],
	},
] satisfies Section[];
