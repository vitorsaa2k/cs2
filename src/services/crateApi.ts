import { Crate } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function getCrate(name: string) {
	return (await instance.get<Promise<Crate>>(`/crate/${name}`)).data;
}
