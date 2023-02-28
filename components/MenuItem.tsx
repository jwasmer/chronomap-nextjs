import { MenuItemProps } from "@/utils/interface"
import styles from "../styles/MenuItem.module.css"

export default function MenuItem(props: MenuItemProps) {
  
  return (
    <li className={styles.menuItem}>
      {props.iconLeft}
      <div className={styles.menuText}>
        {props.children}
      </div>
      {props.iconRight}
    </li>
  )
}