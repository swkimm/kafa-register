export interface GameDetailInfo {
  id: number
  name: string
  gameday: string
  location: SVGStringList
  awayTeam: {
    id: number
    name: string
    initial: string
    profileImgUrl: string
  }
  awayTeamScore: number
  homeTeam: {
    id: number
    name: string
    initial: string
    profileImgUrl: string
  }
  homeTeamScore: number
  league: {
    id: number
    name: string
  }
  association: {
    id: number
    name: string
  }
}
