import { Case } from "../features/case/types/api";
import { instance } from "../libs/axios";

export async function getItems(id: string) {
  return (await instance.get<Promise<Case>>(`/case/${id}`)).data
}