import { Crate } from "../features/crate/types/api";
import { instance } from "../libs/axios";

export async function getItems(id: string) {
  return (await instance.get<Promise<Crate>>(`/case/${id}`)).data
}