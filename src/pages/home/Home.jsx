// CSS
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.content}>
        <h1>Cadastro</h1>
        <div className={styles.buttonDiv}>
          <button>Mercadoria</button>
          <button>Estoque</button>
          <button>Entrada</button>
          <button>Saída</button>
        </div>
        <div>
          <button>Relatorio</button>
        </div>
      </div>
    </>
  );
};

export default Home;
