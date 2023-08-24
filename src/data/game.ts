export interface Game {
  date: Date
  home: string
  away: string
  stadium: string
}

export const dateToString = (date: Date) => {
  return date.toISOString()
}

export const games: Game[] = [
  {
    date: new Date('2023-09-01'),
    home: '성균관대학교',
    away: '연세대학교',
    stadium: '홍천종합운동장'
  }
]
