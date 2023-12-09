import { SkinType } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function rollCrate(name: string, crateNumber: number) {
	return (
		await instance.post<SkinType[]>(`/crate/open/${name}`, {
			crateNumber,
		})
	).data;
}
