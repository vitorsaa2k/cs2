export type Seed = {
	serverSeed: string;
	secretSalt: string;
	publicHash: string;
	nonce: number;
	dateRange: string;
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
