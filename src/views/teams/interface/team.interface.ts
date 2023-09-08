export interface Team {
  id: number
  workoutId: number
  name: string
  message?: string
  teamColor: string
  teamSubColor: string
  profileImgUrl: string
  createdAt: string
  associationId: number
  workout: {
    id: number
    name: string
  }
}
