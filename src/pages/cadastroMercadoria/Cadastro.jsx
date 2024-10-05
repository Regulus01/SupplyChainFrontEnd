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

const Cadastro = () => {
  const [numeroDeRegistro, setNumeroDeRegistro] = useState("f");
  const [nome, setNome] = useState("f");
  const [fabricante, setFabricante] = useState("f");
  const [descricao, setDescricao] = useState("f");
  const [tipoMercadoriaId, setTipoMercadoriaId] = useState("");

  const toast = useRef(null);

  //hooks
  const { PostRequest, response, loading } = useFetch(toast);

  const handleSubmit = (e) => {
    e.preventDefault();

    var body = {
      numeroDeRegistro: numeroDeRegistro,
      nome: nome,
      fabricante: fabricante,
      descricao: descricao,
      tipoMercadoriaId: "32f548f7-593f-43c4-bd07-778596ca619d",
    };

    PostRequest(body, "Mercadoria");
  };

  return (
    <div className={styles.mainContent}>
      <Toast ref={toast} />
      <div className="titulo">
        <h1>Cadastro de mercadoria </h1>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="">
            <h3>Numero de registro</h3>
            <InputText
              disabled={loading}
              required
              className="p-inputtext"
              value={numeroDeRegistro}
              onChange={(e) => setNumeroDeRegistro(e.target.value)}
            />

            <h3>Nome</h3>
            <InputText
              disabled={loading}
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            {loading && (
              <div>
                <ProgressSpinner className={styles.spinner} />
              </div>
            )}

            <h3>Fabricante</h3>
            <InputText
              disabled={loading}
              required
              value={fabricante}
              onChange={(e) => setFabricante(e.target.value)}
            />

            <h3>Descrição</h3>
            <InputText
              required
              disabled={loading}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <h3>Tipo de mercadoria</h3>
            <Dropdown optionLabel="name" placeholder="Tipo de mercadoria" />
          </label>

          <div className={styles.buttonActions}>
            <NavLink to="/">
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

export default Cadastro;
