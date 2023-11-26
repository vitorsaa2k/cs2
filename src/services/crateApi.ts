import { CrateType } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function getCrate(name: string) {
	return (await instance.get<Promise<CrateType>>(`/crate/${name}`)).data;
}
