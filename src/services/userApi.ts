import { instance } from "../libs/axios";
import { InventoryType, UserType } from "../types/api";

export async function getUser() {
	return (await instance.get<Promise<UserType>>(`/user`)).data;
}

export async function getUserInventory() {
	return (await instance.get<Promise<InventoryType>>(`/user/inventory`)).data;
}
