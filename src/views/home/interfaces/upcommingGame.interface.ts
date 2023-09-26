export interface UpcomingGame {
  id: number
  location: string
  gameday: string
  homeTeam: {
    id: number
    name: string
    initial: string
    profileImgUrl: string
  }
  awayTeam: {
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
