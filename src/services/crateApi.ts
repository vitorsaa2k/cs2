import { CrateType } from "../features/crate/types/api";
import { CrateSimulation } from "../features/dashboard/types";
import { instance } from "../libs/axios";

export async function getCrate(name: string) {
	return (
		await instance.get<Promise<CrateType>>(`/crate/${name.replace(/\s+/g, "")}`)
	).data;
}

export async function simulateCrateOpening(
	crate: CrateSimulation,
	crateNumber: number
) {
	return (await instance.post("/crate/simulate", { crate, crateNumber })).data;
}
