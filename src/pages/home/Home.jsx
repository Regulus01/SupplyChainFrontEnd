// CSS
import styles from "./Home.module.css";

//Lib
import { NavLink } from "react-router-dom";

//ReactPrime
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const Home = () => {
  return (
    <>
      <Card className={styles.content}>
        <h1> Cadastro </h1>
        <div className={styles.buttonDiv}>
          <NavLink to="/Mercadoria/Cadastro">
            <Button className={styles.button} label="Mercadoria"></Button>
          </NavLink>
          <NavLink to="/Mercadoria/Cadastro">
            <Button className={styles.button} label="Estoque"></Button>
          </NavLink>
          <NavLink to="/Mercadoria/Cadastro">
            <Button className={styles.button} label="Entrada"></Button>
          </NavLink>
          <NavLink to="/Mercadoria/Cadastro">
            <Button className={styles.button} label="Saída"></Button>
          </NavLink>
        </div>
        <div>
          <p>volte</p>
        </div>
      </Card>
    </>
  );
};

export default Home;
