import { SkinType } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function rollCrate(name: string, id: string, crateNumber: number) {
	return (
		await instance.post<Promise<SkinType[]>>(`/crate/open/${name}`, {
			id,
			crateNumber,
		})
	).data;
}
