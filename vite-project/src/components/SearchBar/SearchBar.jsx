import styles from "./SearchBar.module.css"
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   function handleChange(event){
      setId(event.target.value)
   }

   return (
      <div className={styles.searchBar}>
         <input type='search' placeholder="id..." onChange={handleChange} value={id}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
