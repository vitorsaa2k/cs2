import { instance } from "../libs/axios";
import { Section } from "../types/api";

export async function getAllSections() {
	return await instance
		.get<Promise<Section[]>>("/sections")
		.then(res => res.data);
}
