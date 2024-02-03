import { CrateType } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function getCrateById(crateId: string) {
	return (await instance.get<Promise<CrateType>>(`/crate/${crateId}`)).data;
}
