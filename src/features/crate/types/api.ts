export type Crate = {
  skins: CrateSkin[]
}

export type CrateSkin = {
  name: string
  minRate: number
  maxRate: number
  price: number
  img: string
  color: string
}