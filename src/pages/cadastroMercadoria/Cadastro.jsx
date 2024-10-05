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
  const [numeroDeRegistro, setNumeroDeRegistro] = useState("");
  const [nome, setNome] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedTiposDeMercadoria, setSelectedTiposDeMercadoria] =
    useState(null);
  const [tiposDeMercadoria, setTiposDeMercadoria] = useState([]);

  const toast = useRef(null);

  //hooks
  const { PostRequest, GetRequest, response, loading } = useFetch(toast);

  useEffect(() => {
    const Get = async () => {
      var response = await GetRequest("TipoDeMercadoria");
      setTiposDeMercadoria(response.data);
    };
    Get();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    var body = {
      numeroDeRegistro: numeroDeRegistro,
      nome: nome,
      fabricante: fabricante,
      descricao: descricao,
      tipoMercadoriaId: selectedTiposDeMercadoria.id,
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
              placeholder="Digite o número de registro"
              required
              className="p-inputtext"
              value={numeroDeRegistro}
              onChange={(e) => setNumeroDeRegistro(e.target.value)}
            />

            <h3>Nome</h3>
            <InputText
              disabled={loading}
              placeholder="Digite o nome da mercadoria"
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
              placeholder="Digite o nome do fabricante"
              required
              value={fabricante}
              onChange={(e) => setFabricante(e.target.value)}
            />

            <h3>Descrição</h3>
            <InputText
              placeholder="Digite uma descrição"
              required
              disabled={loading}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <h3>Tipo de mercadoria</h3>
            <Dropdown
              className="w-full md:w-12rem"
              optionLabel="nome"
              value={selectedTiposDeMercadoria}
              onChange={(e) => setSelectedTiposDeMercadoria(e.value)}
              options={tiposDeMercadoria}
              placeholder="Selecione o tipo de mercadoria"
              loading={loading}
            />
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
