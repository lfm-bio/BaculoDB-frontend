import styles from "./header.module.css";


function Header(){



    return (
        <>
            <div className={styles.header}> 
            <h1 className={styles.logo}>BaculoDB</h1>
            <ul className={styles.buttons}>
                <li><a href="#">Genomes</a></li>
                <li><a href="#">Proteins</a></li>
                <li><a href="#">NcRNA</a></li>
                <li><a href="#">Regulatory Elements</a></li>
                <li><a href="#">Batch Download</a></li>
            </ul>
            </div>
        
            <form className={styles.searchBar}>
                <select name="db" id="asd">
                    <option value="db">BaculoDB ID</option>
                    <option value="db">GenkBank ID</option>
                    <option value="db">Species Name</option>
                    <option value="db">Protein Name</option>
                </select>
                <input type="text" autofocus="autofocus" /> 
                <button>Search</button>
            </form>
        </>)
}


export default Header