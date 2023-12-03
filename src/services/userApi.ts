import { instance } from "../libs/axios";
import { InventoryType, UserType } from "../types/api";

export async function getUser(id: string) {
	return await instance.get<Promise<UserType>>(`/user/${id}`);
}

export async function getUserInventory(id: string) {
	return (await instance.get<Promise<InventoryType>>(`/user/inventory/${id}`))
		.data;
}
