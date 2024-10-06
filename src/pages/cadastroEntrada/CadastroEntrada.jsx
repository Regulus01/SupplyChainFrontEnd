//Prime react
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

//lib
import { useEffect, useRef, useState } from "react";

//Css
import styles from "./Cadastro.module.css";

//PrimeReact
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";

const CadastroEntrada = () => {
  const toast = useRef(null);

  const [quantidade, setQuantidade] = useState("");
  const [data, setData] = useState("");

  const { PostRequest, GetRequest, loading } = useFetch(toast);

  const [selectedMercadoria, setSelectedMercadoria] = useState(null);
  const [mercadorias, setMercadorias] = useState([]);

  const [locais, setLocais] = useState([]);
  const [selectedLocal, setSelectedLocal] = useState(null);

  useEffect(() => {
    const Get = async () => {
      var response = await GetRequest("Mercadoria");
      setMercadorias(response.data);
    };
    Get();
  }, []);

  useEffect(() => {
    const Get = async () => {
      var url = "Estoque/" + selectedMercadoria.id + "/Locais";
      var response = await GetRequest(url);
      setLocais(response.data);
    };

    if (selectedMercadoria != null) Get();
  }, [selectedMercadoria]);

  const handleSubmit = (e) => {
    e.preventDefault();

    var body = {
      local: selectedLocal.local,
      quantidade: quantidade,
      dataDaEntrada: data,
      mercadoriaId: selectedMercadoria.id,
    };

    console.log(body);
    PostRequest(body, "Estoque/Entrada");
  };

  return (
    <div className={styles.mainContent}>
      <Toast ref={toast} />
      <div className="titulo">
        <h1> Entrada de mercadoria </h1>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="">
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

            <h3>Local</h3>
            <Dropdown
              className="w-full md:w-12rem"
              required
              optionLabel="local"
              value={selectedLocal}
              onChange={(e) => setSelectedLocal(e.value)}
              options={locais}
              placeholder="Selecione o local do estoque"
              loading={loading}
            />

            {loading && (
              <div>
                <ProgressSpinner className={styles.spinner} />
              </div>
            )}

            <h3>Quantidade</h3>
            <InputText
              disabled={loading}
              type="number"
              placeholder="Digite a quantidade"
              required
              className="p-inputtext"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
            />

            <h3>Data da entrada</h3>
            <InputText
              disabled={loading}
              type="date"
              required
              className="p-inputtext"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </label>
          <div className={styles.buttonActions}>
            <NavLink to="/Cadastro">
              <Button className={styles.button} label="Voltar"></Button>
            </NavLink>
            <Button
              disabled={loading}
              className="p-button-success"
              label="Enviar"
            ></Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroEntrada;
