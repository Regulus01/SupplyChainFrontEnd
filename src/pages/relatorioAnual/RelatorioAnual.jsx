// CSS
import styles from "./RelatorioAnual.module.css";

//Function
import AtualizarGrafico from "./Functions";

//ReactPrime
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Chart } from "primereact/chart";
import { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import useColumGraph from "../../hooks/useColumGraph";
import { Link, NavLink } from "react-router-dom";

const RelatorioAnual = () => {
  const toast = useRef(null);

  //Chart
  const { chartData, chartOptions, setChartData } = useColumGraph();

  //http
  const { GetRequest, loading } = useFetch(toast);
  const [selectedMercadoria, setSelectedMercadoria] = useState(null);
  const [mercadorias, setMercadorias] = useState([]);
  const [Ano, setAno] = useState(2024);

  useEffect(() => {
    const Get = async () => {
      var response = await GetRequest("Mercadoria");
      setMercadorias(response.data);
    };
    Get();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    var response = await GetRequest(
      "Estoque/Relatorio/" + selectedMercadoria.id + "/" + Ano
    );

    const documentStyle = getComputedStyle(document.documentElement);

    var dataCharp = response.data;

    const data = AtualizarGrafico(documentStyle, dataCharp);

    setChartData(data);
  };

  return (
    <div className={styles.main}>
      <h2>Relatorio Anual</h2>
      <div className={styles.opcoes}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              <h3>Mercadoria</h3>
              <Dropdown
                className="w-full md:w-12rem"
                optionLabel="nome"
                required
                value={selectedMercadoria}
                onChange={(e) => setSelectedMercadoria(e.value)}
                options={mercadorias}
                placeholder="Selecione o tipo de mercadoria"
                loading={loading}
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
              <Button
                disabled={loading}
                className="p-button-success"
                label="Obter"
              ></Button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.grafico}>
        <Chart type="bar" data={chartData} options={chartOptions} />
      </div>
      <div className={styles.botoes}>
        <div className={styles.actionButtons}>
          <NavLink to="/Relatorio">
            <Button label="Voltar"></Button>
          </NavLink>

          <Link to={`GerarPdf/${selectedMercadoria?.id}`}>
            <Button
              disabled={selectedMercadoria == undefined}
              color="green"
              className={styles.button}
              label="Gerar PDF"
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatorioAnual;
