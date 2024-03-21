import { useState, useEffect } from "react";
import { getBaculoviridaeTable } from "../api/dbs.api";
import styles from "../styles/mainContent.module.css";

function Baculoviridae() {
  const [entries, setEntries] = useState();

  useEffect(() => {
    getBaculoviridaeTable().then(setEntries);
  }, []);

  if (entries === undefined) {
    return "Loading...";
  }

  const Baculo = entries[0];
  const A = entries[1];
  const AII = entries[2];
  const AI = entries[3];
  const B = entries[4];
  const D = entries[5];
  const G = entries[6];

  return (
    <div className={styles.tableOut}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Group</th>
            <th>Genomes</th>
            <th>%GC(min/max/av)</th>
            <th>Length(min/max/av)</th>
            <th>Proteins/Genome(min/max/av)</th>
          </tr>

          <tr>
            <td>
              <i>Baculoviridae</i>
            </td>
            <td>{Baculo.n_genomes}</td>
            <td>
              {Baculo.gc_min}/{Baculo.gc_max}/{Baculo.gc_av}
            </td>
            <td>
              {Baculo.len_min}/{Baculo.len_max}/{Baculo.len_av}
            </td>
            <td>
              {Baculo.n_prots_min}/{Baculo.n_prots_max}/{Baculo.n_prots_av}
            </td>
          </tr>

          <tr>
            <td>
              <i>Alphabaculovirus</i>
            </td>
            <td>{A.n_genomes}</td>
            <td>
              {A.gc_min}/{A.gc_max}/{A.gc_av}
            </td>
            <td>
              {A.len_min}/{A.len_max}/{A.len_av}
            </td>
            <td>
              {A.n_prots_min}/{A.n_prots_max}/{A.n_prots_av}
            </td>
          </tr>

          <tr>
            <td>
              <i>Alphabaculovirus I</i>
            </td>
            <td>{AI.n_genomes}</td>
            <td>
              {AI.gc_min}/{AI.gc_max}/{AI.gc_av}
            </td>
            <td>
              {AI.len_min}/{AI.len_max}/{AI.len_av}
            </td>
            <td>
              {AI.n_prots_min}/{AI.n_prots_max}/{AI.n_prots_av}
            </td>
          </tr>

          <tr>
            <td>
              <i>Alphabaculovirus II</i>
            </td>
            <td>{AII.n_genomes}</td>
            <td>
              {AII.gc_min}/{AII.gc_max}/{AII.gc_av}
            </td>
            <td>
              {AII.len_min}/{AII.len_max}/{AII.len_av}
            </td>
            <td>
              {AII.n_prots_min}/{AII.n_prots_max}/{AII.n_prots_av}
            </td>
          </tr>

          <tr>
            <td>
              <i>Betabaculovirus/GV</i>
            </td>
            <td>{B.n_genomes}</td>
            <td>
              {B.gc_min}/{B.gc_max}/{B.gc_av}
            </td>
            <td>
              {B.len_min}/{B.len_max}/{B.len_av}
            </td>
            <td>
              {B.n_prots_min}/{B.n_prots_max}/{B.n_prots_av}
            </td>
          </tr>

          <tr>
            <td>
              <i>Gammabaculovirus</i>
            </td>
            <td>{G.n_genomes}</td>
            <td>
              {G.gc_min}/{G.gc_max}/{G.gc_av}
            </td>
            <td>
              {G.len_min}/{G.len_max}/{G.len_av}
            </td>
            <td>
              {G.n_prots_min}/{G.n_prots_max}/{G.n_prots_av}
            </td>
          </tr>

          <tr>
            <td>
              <i>Deltabaculovirus</i>
            </td>
            <td>{D.n_genomes}</td>
            <td>
              {D.gc_min}/{D.gc_max}/{D.gc_av}
            </td>
            <td>
              {D.len_min}/{D.len_max}/{D.len_av}
            </td>
            <td>
              {D.n_prots_min}/{D.n_prots_max}/{D.n_prots_av}
            </td>
          </tr>
          {/* 
          <tr>
            <td>SNPV</td>
            <td>NO-DATA</td>
            <td>NO-DATA</td>
            <td>NO-DATA</td>
            <td>NO-DATA</td>
          </tr>

          <tr>
            <td>MNPV</td>
            <td>NO-DATA</td>
            <td>NO-DATA</td>
            <td>NO-DATA</td>
            <td>NO-DATA</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Baculoviridae;
