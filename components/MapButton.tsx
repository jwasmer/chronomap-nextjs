import { useState } from "react"
import { MapButtonProps } from "@/utils/interface"
import Menu from "./Menu"
import styles from "../styles/MapButton.module.css"

export default function MapButton(props: MapButtonProps) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <button className={styles.button} onClick={() => {
        setOpen((prevState => !prevState))
      }}>
        {props.icon}
      </button>
      {open && 
       props.children
      }
    </div>
  )
}