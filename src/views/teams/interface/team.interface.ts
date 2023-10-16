export interface Team {
  id: number
  workout_id: number
  name: string
  message?: string
  profile_img_url: string
  created_at: string
  association_id: number
  initial: string
  team_color: string
  team_sub_color: string
  rank?: number
  win?: number
  lose?: number
  draw?: number
}
