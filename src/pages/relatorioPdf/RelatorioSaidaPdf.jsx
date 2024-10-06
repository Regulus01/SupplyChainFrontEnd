import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import styles from "./RelatorioPdf.module.css";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "primereact/button";
import { useReactToPrint } from "react-to-print";

const RelatorioSaidaPdf = () => {
  const { GetRequest, loading } = useFetch(null);
  const [data, setResponse] = useState(null);
  const { id } = useParams();
  const { ano } = useParams();
  const { mes } = useParams();

  const contentDocument = useRef(null);

  const handleDownload = useReactToPrint({
    contentRef: contentDocument,
    documentTitle: "Relatorio",
  });

  useEffect(() => {
    const fetchData = async () => {
      var response = await GetRequest(`Estoque/Saidas/${id}/${ano}/${mes}`);
      setResponse(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Saidas de Estoque</h1>
        <Button onClick={handleDownload}>Salvar</Button>
        <hr />
        <NavLink to="/">
          <Button>Home</Button>
        </NavLink>
      </div>
      {!loading && data != null && (
        <div ref={contentDocument} className={styles.content}>
          <div className={styles.local}>
            <th>Local</th>
            <hr />
            {data.map((entrada, index) => (
              <tr key={index}>
                <td>{entrada.local}</td>
              </tr>
            ))}
          </div>

          <div className={styles.quantidade}>
            <th>Quantidade</th>
            <hr />

            {data.map((entrada, index) => (
              <tr key={index}>
                <td>{entrada.quantidade}</td>
              </tr>
            ))}
          </div>

          <div className={styles.data}>
            <th>Data da Saida</th>
            <hr />

            {data.map((entrada, index) => (
              <tr key={index}>
                <td>{new Date(entrada.dataDaSaida).toLocaleDateString()}</td>
              </tr>
            ))}
          </div>

          <div className={styles.mercadoria}>
            <th>Mercadoria</th>
            <hr />

            {data.map((entrada, index) => (
              <tr key={index}>
                <td>{entrada.mercadoria}</td>
              </tr>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RelatorioSaidaPdf;
