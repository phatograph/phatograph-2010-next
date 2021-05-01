export type projectImage = {
  order: number
  url: string
  urlThumb: string
  width: number
  height: number
}

export type project = {
  _id?: string
  order?: number
  title?: string
  slug?: string
  year?: string
  images?: projectImage[]
}
