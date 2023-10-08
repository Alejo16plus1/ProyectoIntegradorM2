import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

const Nav = ({onSearch}) =>{

    return(
        <div className={styles.nav}>
            <div className={styles.links}>
                <Link to="/about">About</Link>
                <Link to="/home">Home</Link>
            </div>
            <div className={styles.searchBar}>
                <SearchBar onSearch={onSearch}/>
            </div>
        </div>
    )
}

export default Nav;