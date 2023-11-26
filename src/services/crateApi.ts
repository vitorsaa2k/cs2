import { Cratetype } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function getCrate(name: string) {
	return (await instance.get<Promise<Cratetype>>(`/crate/${name}`)).data;
}
