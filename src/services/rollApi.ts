import { CrateSkin } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function rollCrate(name: string) {
	return (await instance.get<Promise<CrateSkin>>(`/crate/open/${name}`)).data;
}
