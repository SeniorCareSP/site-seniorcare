import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPasswordStep2.module.css';
import logo from '../../utils/assets/logoapertadinha.svg'
import ButtonAzul from '../botao/BotaoAzul';
import voltar from '../../utils/assets/setaVoltar.png'
import Style from '../eleLogin/ImgLogin';


const ResetPasswordStep2 = () => {
  const navigate = useNavigate();

  return (
      <div className={styles.container}>
      <div className={styles.leftSide}>
      <img src={voltar} className={styles.backButton} onClick={()=> navigate("/")}/>
        <h1>Redefina sua senha</h1>
        <p className={styles.paragrafo}>Ajuda está a caminho. O link foi enviado com sucesso, caso o endereço de e-mail digitado esteja cadastrado.</p>
        <div className={styles.spacing}>
        <ButtonAzul onClick={() => navigate('/home')}>Página inicial</ButtonAzul>
        </div>
      </div>
      <div className={styles.rightSide}>
      <img src={logo} alt = "Logo"/>
      </div>
    </div>
  );
};

export default ResetPasswordStep2;
