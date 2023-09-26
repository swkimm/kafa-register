export interface RemainingGames {
  id: number
  homeTeamId: number
  homeTeamScore: number
  awayTeamId: number
  awayTeamScore: number
  leagueId: number
  name: string
  gameday: string
  location: string
  result: string
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
    id: string
    name: string
  }
}
