import { DrawnSkin } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function rollCrate(name: string, crateNumber: number) {
	return (
		await instance.post<DrawnSkin[]>(
			`/crate/open/${name.replace(/\s+/g, "")}`,
			{
				crateNumber,
			}
		)
	).data;
}

export async function getRollById(rollId: string) {
	return (await instance.get(`/crate/roll/${rollId}`)).data;
}
