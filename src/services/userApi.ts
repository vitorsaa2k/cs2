import { instance } from "../libs/axios";
import { InventoryType, UserType } from "../types/api";

export async function getUser() {
	return (await instance.get<Promise<UserType>>(`/user`)).data;
}

export async function getUserInventory() {
	return (await instance.get<Promise<InventoryType>>(`/user/inventory`)).data;
}

export async function getUserPublicSeeds() {
	return (await instance.get("/user/seeds")).data;
}

export async function getServerSeedHistory() {
	return (await instance.get("/user/seeds/history")).data;
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
