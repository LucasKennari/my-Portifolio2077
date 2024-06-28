import React from 'react'
import styles from './titulo.module.css' 
function Titulo() {

       const [animacaoFinalizada, setAnimacaoFinalizada] = React.useState(false)

     
       React.useEffect(() => {
                     const elemento = document.getElementById("body")
                     const timeout = setTimeout(() => {
                            setAnimacaoFinalizada(true);
                     }, 4600); // Duração da animação
                 
                     return () => clearTimeout(timeout);
                   }, []);


       
  return (
    <div id={styles.typewriter}>
                <h1 className={styles.titulo}> Seja Bem vindx!</h1>
                <div>
                     {animacaoFinalizada && <div>ANIMACAO TERMINADA</div> }
                </div>
    </div>
  )
}

export default Titulo