import styles from "./header.module.css";


function Header(){



    return (<div className={styles.header}>
    <h1 className={styles.logo}>BaculoDB</h1>

    <ul className={styles.buttons}>
        <li><a href="#">Genomes</a></li>
        <li><a href="#">Proteins</a></li>
        <li><a href="#">NcRNA</a></li>
        <li><a href="#">Regulatory Elements</a></li>
        <li><a href="#">Batch Download</a></li>
    </ul>

    <form>
        <input type="text" placeholder="GenBank ID or BaculoDB ID" /> 
        <button>Search</button>
    </form>
    </div>)
}


export default Header