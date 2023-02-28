import { PropsWithChildren } from "react"

export interface IconProps {
  color?: string
  name: "arrow_drop_down" | "settings" | "navigate_next" | "add"
}

export type MapButtonProps = PropsWithChildren<{
  icon: React.ReactNode
}>

export interface MapContext {
  profile: string
  time: string
}

export type MenuItemProps = PropsWithChildren <{
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  link?: string
}>