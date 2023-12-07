import { instance } from "../libs/axios";

export async function getSkinByName(name: string) {
	return (await instance.get(`/skin/${name}`)).data;
}
