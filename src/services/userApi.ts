import { instance } from "../libs/axios";

export async function getUser(id: string) {
	return await instance.get(`/user/${id}`);
}
