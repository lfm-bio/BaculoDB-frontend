import styles from "./genome.module.css"

function Genome(){
return (
    <>
    <ul className={styles.genomeInfo}>
    <li>Name: </li>
    <li>ID: </li>
    <li>GenBank ID: </li>
    <li>Date: </li>
    <li>Organism: </li>
    <li>ICTV: </li>
    <li>Reference: </li>
    <li>Genus: </li>
    <li>Morphology: </li>
    <li>Lenght (bp): </li>
    <li>%GC: </li>

    </ul>
    
    </>
)

}

export default Genome