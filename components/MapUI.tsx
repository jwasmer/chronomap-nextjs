import styles from "../styles/MapUI.module.css"
import Icon from "./Icon"
import Menu from "./Menu"
import Searchbar from "./Searchbar"
import MapButton from "./MapButton"
import MenuItem from "./MenuItem"

export default function MapUI() {
  return (
    <header className={styles.nav}>
      <Searchbar />
      <MapButton icon={<Icon name={"arrow_drop_down"} />}>
        <Menu>
          <MenuItem link={"/account"} iconLeft={<Icon name={"settings"} />}>
            Account
          </MenuItem>
          <MenuItem link={"/organizations"} iconLeft={<Icon name={"settings"} />}>
            Organizations
          </MenuItem>
          <MenuItem link={"/signout"} iconLeft={<Icon name={"settings"} />}>
            Sign Out
          </MenuItem>
        </Menu>
      </MapButton>
    </header>
  );
}