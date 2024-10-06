//Css
import styles from "./Cadastro.module.css";

//PrimeReact
import { InputText } from "primereact/inputtext";

import { useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Toast } from "primereact/toast";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";

const CadastroTipoDeMercadoria = () => {
  const toast = useRef(null);

  const [nome, setNome] = useState("");

  const { PostRequest, loading } = useFetch(toast);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("teste");

    var body = {
      nome: nome,
    };

    PostRequest(body, "TipoDeMercadoria");
  };

  return (
    <div className={styles.mainContent}>
      <Toast ref={toast} />
      <div className="titulo">
        <h1>Cadastro de tipo de mercadoria </h1>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="">
            <h3>Nome</h3>
            <InputText
              disabled={loading}
              placeholder="Digite o nome do tipo"
              required
              className="p-inputtext"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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

export default CadastroTipoDeMercadoria;
