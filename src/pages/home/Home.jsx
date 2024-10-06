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
        <h1 className="titulo"> Home </h1>
        <div className={styles.buttonDiv}>
          <NavLink to="Cadastro">
            <Button className={styles.button} label="Mercadoria"></Button>
          </NavLink>
          <NavLink to="Cadastro">
            <Button className={styles.button} label="Relatorios"></Button>
          </NavLink>
        </div>
      </Card>
    </>
  );
};

export default Home;
