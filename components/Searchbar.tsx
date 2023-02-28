import { useState, ChangeEvent, ChangeEventHandler } from "react"
import styles from "../styles/Searchbar.module.css"

export default function Searchbar() {
  const [searchText, setSearchText] = useState<string>('')

  const handleSearchTextChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchText(event.target.value)
  }

  return (
    <form>
      <input 
        className={styles.search} 
        type="text" 
        value={searchText} 
        onChange={handleSearchTextChange} 
      />
    </form>
  )
}