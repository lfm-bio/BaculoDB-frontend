import styles from "./header.module.css";
import { Link } from "react-router-dom"


function Header(){
    return (
        <>
            <div className={styles.header}> 
            <h1 className={styles.logo}><Link to="/">BaculoDB</Link></h1>
            <ul className={styles.buttons}>
                <li><Link to="/genome">Genomes</Link></li>
                <li><Link to="#">Proteins</Link></li>
                <li><Link to="#">NcRNA</Link></li>
                <li><Link to="#">Regulatory Elements</Link></li>
                <li><Link to="#">Batch Download</Link></li>
            </ul>
            </div>
        
            <form className={styles.searchBar}>
                <select name="db" id="asd">
                    <option value="db">ID / GB Accss</option>
                    <option value="db">Species</option>
                    <option value="db">Protein</option>
                </select>
                <input type="text" autoFocus="autofocus" /> 
                <button>Search</button>
            </form>
        </>)
}


export default Header