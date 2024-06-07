import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPasswordStep4.module.css';
import logo from '../../utils/assets/logoapertadinha.svg'
import ButtonAzul from '../botao/BotaoAzul';
import voltar from '../../utils/assets/setaVoltar.png'

const ResetPasswordStep4 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
      <img src={voltar} className={styles.backButton} onClick={()=> navigate("/")}/>
        <h1>Redefina sua senha</h1>
        <p className={styles.paragrafo}>Sua senha foi redefinida com sucesso! Clique no botão abaixo para ir para a página de <span className={styles.loginLink} onClick={() => navigate('/login')}>login</span>.</p>
        <div className={styles.spacing}>
        <ButtonAzul onClick={() => navigate('/login')}>Página Login</ButtonAzul>
        </div>
      </div>
      <div className={styles.rightSide}>
      <img src={logo} alt = "Logo"/>
      </div>
    </div>
  );
};

export default ResetPasswordStep4;
