//Prime react
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

//lib
import { useState } from "react";

//Css
import styles from "./Cadastro.module.css";

//PrimeReact
import { Button } from "primereact/button";
import { NavLink } from "react-router-dom";

const Cadastro = () => {
  const [numeroDeRegistro, setNumeroDeRegistro] = useState("");
  const [nome, setNome] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipoMercadoriaId, setTipoMercadoriaId] = useState("");

  return (
    <div className={styles.mainContent}>
      <div>
        <h1>Cadastro de mercadoria</h1>
      </div>
      <div className={styles.content}>
        <form action="">
          <label className={styles.label} htmlFor="">
            <h3>Numero de registro</h3>
            <InputText
              className="p-inputtext"
              value={numeroDeRegistro}
              onChange={(e) => setNumeroDeRegistro(e.target.value)}
            />

            <h3>Nome</h3>
            <InputText value={nome} onChange={(e) => setNome(e.target.value)} />

            <h3>Fabricante</h3>
            <InputText
              value={fabricante}
              onChange={(e) => setFabricante(e.target.value)}
            />

            <h3>Descricao</h3>
            <InputText
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <h3>Tipo de mercadoria</h3>
            <Dropdown optionLabel="name" placeholder="Tipo de mercadoria" />
          </label>
        </form>

        <div className={styles.buttonActions}>
          <NavLink to="/">
            <Button className={styles.button} label="Voltar"></Button>
          </NavLink>
          <Button className="p-button-success" label="Enviar"></Button>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
