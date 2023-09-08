export interface GameInfo {
  id: number
  name: string
  gameday: string
  location: string
  awayTeam: {
    id: number
    name: string
    initial: string
    profileImgUrl: string
  }
  homeTeam: {
    id: number
    name: string
    initial: string
    profileImgUrl: string
  }
  league: {
    id: number
    name: string
  }
}
