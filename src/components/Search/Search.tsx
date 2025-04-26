import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs"
import styles from "./Search.module.css"

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(username);
    }
  }

  return (
    <div className={styles.search}>
      <div className={styles.search_container}>
        <input 
          type="text" 
          placeholder="Digite um usuário do Github" onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(username)}>
          <BsSearch size={25}/>
        </button>
      </div>
    </div>
  )
}

export default Search
