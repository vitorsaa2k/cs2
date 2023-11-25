import { instance } from "../libs/axios";
import { UserType } from "../types/api";

export async function getUser(id: string) {
	return await instance.get(`/user/${id}`);
}
