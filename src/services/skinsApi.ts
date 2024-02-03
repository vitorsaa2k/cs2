import { instance } from "../libs/axios";

export async function getSkinByRange(maxPrice: number, page?: number) {
	return (await instance.get(`/skin/range?maxPrice=${maxPrice}&page=${page}`))
		.data;
}
