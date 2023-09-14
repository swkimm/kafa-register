import type { Type } from './member-type.interface'

export interface TeamMember {
  id: number
  teamId: number
  name: string
  backNumber: number
  registrationDate: string
  type: Type
  weight: number
  height: number
  position: string[]
  profileImgUrl: string
}
