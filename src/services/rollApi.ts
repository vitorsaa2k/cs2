import { DrawnSkin } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function rollCrate(crateId: string, crateNumber: number) {
	return (
		await instance.post<DrawnSkin[]>(`/crate/open/${crateId}`, {
			crateNumber,
		})
	).data;
}

export async function getRollById(rollId: string) {
	return (await instance.get(`/crate/roll/${rollId}`)).data;
}
