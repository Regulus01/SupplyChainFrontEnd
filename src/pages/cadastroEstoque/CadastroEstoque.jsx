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

const CadastroEstoque = () => {
  const toast = useRef(null);

  const [local, setLocal] = useState("");

  const { PostRequest, GetRequest, loading } = useFetch(toast);

  const [selectedMercadoria, setSelectedMercadoria] = useState(null);
  const [mercadorias, setMercadorias] = useState([]);

  useEffect(() => {
    const Get = async () => {
      var response = await GetRequest("Mercadoria");
      setMercadorias(response.data);
    };
    Get();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    var body = {
      local: local,
      mercadoriaId: selectedMercadoria.id,
    };

    PostRequest(body, "Estoque");
  };

  return (
    <div className={styles.mainContent}>
      <Toast ref={toast} />
      <div className="titulo">
        <h1>Cadastro de estoque </h1>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="">
            <h3>Local</h3>
            <InputText
              disabled={loading}
              placeholder="Digite o nome do local"
              required
              className="p-inputtext"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />

            {loading && (
              <div>
                <ProgressSpinner className={styles.spinner} />
              </div>
            )}

            <h3>Tipo de mercadoria</h3>
            <Dropdown
              className="w-full md:w-12rem"
              optionLabel="nome"
              value={selectedMercadoria}
              onChange={(e) => setSelectedMercadoria(e.value)}
              options={mercadorias}
              placeholder="Selecione o tipo de mercadoria"
              loading={loading}
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

export default CadastroEstoque;
