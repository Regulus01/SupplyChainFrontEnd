// CSS
import styles from "./Relatorio.module.css";

//Lib
import { NavLink } from "react-router-dom";

//ReactPrime
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const Relatorio = () => {
  return (
    <>
      <Card className={styles.content}>
        <h1 className="titulo"> Relatorio </h1>
        <div className={styles.buttonDiv}>
          <NavLink to="Anual">
            <Button className={styles.button} label="Anual"></Button>
          </NavLink>
          <NavLink to="Anual">
            <Button className={styles.button} label="Relatorios"></Button>
          </NavLink>

          <NavLink to="/">
            <Button className={styles.button} label="Voltar"></Button>
          </NavLink>
        </div>
      </Card>
    </>
  );
};

export default Relatorio;
