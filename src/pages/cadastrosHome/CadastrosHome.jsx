// CSS
import styles from "./CadastrosHome.module.css";

//Lib
import { NavLink } from "react-router-dom";

//ReactPrime
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const CadastrosHome = () => {
  return (
    <>
      <Card className={styles.content}>
        <h1 className="titulo"> Cadastros </h1>
        <div className={styles.buttonDiv}>
          <NavLink to="TipoDeMercadoria">
            <Button
              className={styles.button}
              label="Tipo de Mercadoria"
            ></Button>
          </NavLink>
          <NavLink to="Mercadoria">
            <Button className={styles.button} label="Mercadoria"></Button>
          </NavLink>
          <NavLink to="Estoque">
            <Button className={styles.button} label="Estoque"></Button>
          </NavLink>
          <NavLink to="Entrada">
            <Button className={styles.button} label="Entrada"></Button>
          </NavLink>
          <NavLink to="Saida">
            <Button className={styles.button} label="Saída"></Button>
          </NavLink>

          <div>
            <NavLink to="/">
              <Button className={styles.button} label="Voltar"></Button>
            </NavLink>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CadastrosHome;
