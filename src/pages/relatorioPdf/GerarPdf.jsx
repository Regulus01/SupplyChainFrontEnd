// CSS
import styles from "./GerarPdf.module.css";

//ReactPrime
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";

import { Link, NavLink, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const GerarPdf = () => {
  const { id } = useParams();
  const [Ano, setAno] = useState(2024);
  const [Mes, setMes] = useState(10);

  const contentDocument = useRef(null);

  const handleDownload = useReactToPrint({
    contentRef: contentDocument,
    documentTitle: "Relatorio.pdf",
  });

  return (
    <div className={styles.main}>
      <h2>Gerar Pdf</h2>
      <div className={styles.opcoes}>
        <div className={styles.form}>
          <form>
            <label className={styles.label}>
              <h3>Mes</h3>
              <InputText
                type="number"
                value={Mes}
                required
                onChange={(e) => setMes(e.target.value)}
                className="p-inputtext"
              />
              <h3>Ano</h3>
              <InputText
                type="number"
                value={Ano}
                required
                onChange={(e) => setAno(e.target.value)}
                className="p-inputtext"
              />
            </label>

            <div className={styles.formButton}>
              <Link to={`${Ano}/${Mes}/Entrada/Pdf`}>
                <Button
                  className="p-button-success"
                  label="Entradas"
                ></Button>
              </Link>
              <div>
              <Link to={`${Ano}/${Mes}/Saida/Pdf`}>
                <Button
                  className="p-button-success"
                  label="Saida"
                ></Button>
              </Link>

              </div>
            </div>
          </form>
        </div>
        <NavLink to="/Relatorio/Anual">
          <Button label="Voltar"></Button>
        </NavLink>
      </div>
    </div>
  );
};

export default GerarPdf;
