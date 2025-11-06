export type Seed = {
	serverSeed: string;
	secretSalt: string;
	publicHash: string;
	nonce: number;
	dateRange: string;
};

export type PublicSeed = {
	clientSeed: string;
	publicHash: string;
	nonce: number;
};

export type RollType = {
	clientSeed: string;
	serverSeed: string;
	crateName: string;
	secretSalt: string;
	publicHash: string;
	roll: number;
	nonce: number;
	dateRange: string;
};

export interface SeedPaginated {
	data: Seed[];
	pagination: {
		total: number;
		page: number;
		pageSize: number;
		totalPages: number;
	};
}
