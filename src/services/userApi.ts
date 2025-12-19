import {
	PublicSeed,
	Seed,
	SeedPaginated,
} from "../features/provablyFair/types/api";
import { SortOptions } from "../features/upgrade/contextTypes";
import { Pagination } from "../hooks/useQuery/inventory";
import { instance } from "../libs/axios";
import { InventoryType, UserType } from "../types/api";

export async function getUser() {
	return (await instance.get<Promise<UserType>>(`/user`)).data;
}

export async function getUserInventory() {
	return (
		await instance.get<Promise<InventoryType>>(`/user/inventory?sort=DESC`)
	).data;
}

export async function getUserInventoryByPage(
	page: number,
	filter: { sort: SortOptions }
) {
	return (
		await instance.get<
			Promise<InventoryType & Pagination & { totalPrice: number }>
		>(`/user/inventory?page=${page}&sort=${filter.sort}`)
	).data;
}

export async function getUserPublicSeeds() {
	return (await instance.get<Promise<PublicSeed>>("/user/seeds")).data;
}

export async function getServerSeedHistory() {
	return (await instance.get<Promise<Seed[]>>("/user/seeds/history")).data;
}

export async function getServerSeedHistoryPaginated(page: number) {
	return (
		await instance.get<Promise<SeedPaginated>>(
			`/user/seeds/history/paginated?page=${page}`
		)
	).data;
}

export async function sellAllUserSkins() {
	return (await instance.get("/user/inventory/sell/all")).data;
}

export async function sellSkins(rollId: string[]) {
	return (await instance.post("/user/inventory/sell", { skins: rollId })).data;
}

export async function getUserById(userId: string) {
	return (await instance.get<Promise<UserType>>(`/user/public/${userId}`)).data;
}

export async function getUserInventoryById(userId: string) {
	return (
		await instance.get<Promise<InventoryType>>(
			`/user/inventory/public/${userId}`
		)
	).data;
}

export async function getUserInventoryByIdPaginated(
	userId: string,
	page: number
) {
	return (
		await instance.get<Promise<InventoryType & Pagination>>(
			`/user/inventory/public/${userId}?page=${page}`
		)
	).data;
}
