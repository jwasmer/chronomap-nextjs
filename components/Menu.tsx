import { PropsWithChildren } from "react"
import styles from "../styles/Menu.module.css"

export default function Menu(props: PropsWithChildren) {

  return (
    <menu className={styles.menuWrapper}>
      {props.children}
    </menu>
  )
}