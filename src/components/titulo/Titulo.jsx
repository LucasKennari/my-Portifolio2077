import React from "react";
import styles from "./titulo.module.css";

function Titulo() {
  const [animacaoFinalizada, setAnimacaoFinalizada] = React.useState(false);
  const myRef = React.useRef(null);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimacaoFinalizada(true);
    }, 4600); // Duração da animação

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id={styles.typewriter} ref={myRef}>
      <h1 className={styles.titulo}> Seja Bem vindx!</h1>
      <div>{animacaoFinalizada && <div>ANIMACAO TERMINADA</div>}</div>
    </div>
  );
}

export default Titulo;
