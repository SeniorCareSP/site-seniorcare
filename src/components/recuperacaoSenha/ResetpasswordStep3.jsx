import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPasswordStep3.module.css';
import logo from '../../utils/assets/logoapertadinha.svg'
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import InputTexfield from '../Input/Input';
import voltar from '../../utils/assets/setaVoltar.png'
import Style from '../eleLogin/ImgLogin';

const ResetPasswordStep3 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
      <img src={voltar} className={styles.backButton} onClick={()=> navigate("/")}/>
      <h1>Redefina sua senha</h1>
      <div className={styles.spacing}>
        <InputTexfield label="Email" />
      </div>
        <div className={styles.spacing}>
        <InputTexfield label="Senha" />
        </div>
        <div className={styles.spacing}>
        <ButtonAzul onClick={() => navigate('/reset-password-4')}>Proximo</ButtonAzul>
        </div>
        <div className={styles.spacing}>
        <ButtonBranco onClick={() => navigate('/')}>Cancelar</ButtonBranco>
        </div>
      </div>
      <div className={styles.rightSide}>
      <img src={logo} alt = "Logo"/>
      </div>
    </div>
  );
};

export default ResetPasswordStep3;
