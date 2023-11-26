import { SkinType } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function rollCrate(name: string) {
	return (await instance.get<Promise<SkinType>>(`/crate/open/${name}`)).data;
}
