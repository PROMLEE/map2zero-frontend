export interface StoreStateType  {
  id: number,
  name: string,
  summary: string,
  average_score:number,
  review_cnt:number,
  address: {
    province: string,
    city:  string,
    road_name:  string,
    lot_number:string,
  },
  photo: {
    url:  string,
    width: number,
    height: number
  }
}

export interface ItemStateType{
  name: string,
  price: number,
  photo: {
    url: string,
    width: number,
    height: number,
  },
  store_id: number,
  store_name: string,
}


export interface NearestStateType{
  id: number,
  name: string,
  address: {
    city:  string,
    lot_number:string,
    province: string,
    road_name:  string,
  },
  review_cnt: number,
  average_score: number,
  x: number,
  y: number,
  photo: string | null,
  distance: number,
  bookmarked: boolean
}