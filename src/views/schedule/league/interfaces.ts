import type { GameResult } from '@/views/game/interfaces/game.interface'

export interface GameInfo {
  id: number
  name: string
  gameday: string
  location: string
  homeTeamScore: number
  awayTeamScore: number
  result: GameResult
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
