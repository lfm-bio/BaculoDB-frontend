import styles from "./styles/mainContent.module.css"

function Genome(){
return (
    <>
    <ul className={styles.entryData}>
    <li>Name: </li>
    <li>Organism: </li>
    <li>Organism ID: </li>
    <li>ICTV: </li>
    <li>Reference: </li>
    <li>Genus: </li>
    <li>Morphology: </li>
    <li>Lenght (bp): </li>
    <li>%GC: </li>
    <li>N proteins: </li>
    <li>Codon Usage: </li>
    <li>Sequence: </li>
    </ul>
    </>
)}

export default Genome