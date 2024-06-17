import { useCallback } from "react";
import styles from "./erro.module.css";
import Navbar from "../../components/home/navbar/navbar";
import Senhora from '../../utils/assets/mulher-loira-de-meia-idade-confusa-olhando-para-a-frente-fazendo-um-gesto-nao-sei-isolado-na-parede-amarela-removebg-preview1.png'
import Ondas from '../../utils/assets/Rectangle202.png'

const Pgina404NotFound = () => {
  const onFrameButtonClick = useCallback(() => {
    window.location.href = "/";  }, []);

  return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.organizadora}>
              <div className={styles.div}>404</div>
              <h1 className={styles.pginaNoEncontrada}>Página não encontrada</h1>
              <button
                className={styles.textoDoBotoWrapper}
                onClick={onFrameButtonClick}
              >
                <div className={styles.textoDoBoto}>Tela Inicial</div>
              </button>
            </div>
            <div className={styles.divright}>
              <img src={Senhora} alt="Mulher fazendo sinal de confusao" className={styles.senhora}/>
            </div>
          </div>
          <div className={styles.ondas}>
            <img src={Ondas} alt="Retangulo azul ondulado"/>
          </div>
        </div> 
      </div>
  );
};

export default Pgina404NotFound;
