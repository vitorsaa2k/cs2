import { CaseSkin } from "../features/case/types/api";
import { instance } from "../libs/axios";

export async function rollCase(id: string) {
  return (await instance.get<Promise<CaseSkin>>(`/roll/${id}`)).data
}