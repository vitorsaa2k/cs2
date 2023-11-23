import { CrateSkin } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function rollCrate(id: string) {
  return (await instance.get<Promise<CrateSkin>>(`/roll/${id}`)).data
}