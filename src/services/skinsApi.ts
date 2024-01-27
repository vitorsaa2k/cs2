import { instance } from "../libs/axios";

export async function getSkinByName(name: string) {
	return (await instance.get(`/skin/${name}`)).data;
}

export async function getSkinByRange(maxPrice: number, page?: number) {
	return (await instance.get(`/skin/range?maxPrice=${maxPrice}&page=${page}`))
		.data;
}
