export type Case = {
  skins: CaseSkin[]
}

export type CaseSkin = {
  name: string
  minRate: number
  maxRate: number
  price: number
  img: string
  color: string
}