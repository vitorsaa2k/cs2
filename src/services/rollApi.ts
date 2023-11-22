import { instance } from "../libs/axios";

export async function rollCase(id: string) {
  return (await instance.get(`/roll/${id}`)).data
}