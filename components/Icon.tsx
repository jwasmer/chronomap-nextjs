import { IconProps } from "@/utils/interface"

export default function SettingsIcon({ color, name }: IconProps) {

  return (
    <span className={"material-symbols-outlined"} style={{color}}>
      {name}
    </span>
  )
}