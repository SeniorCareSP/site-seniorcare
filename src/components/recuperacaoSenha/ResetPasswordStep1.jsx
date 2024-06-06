import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ResetPasswordStep1.module.css';
import logo from '../../utils/assets/logoapertadinha.svg'
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import InputTexfield from '../Input/Input';
import voltar from '../../utils/assets/setaVoltar.png'
import Style from '../eleLogin/ImgLogin';




const ResetPasswordStep1 = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
      <img src={voltar} className={styles.backButton} onClick={()=> navigate("/")}/>
        <h1>Redefina sua senha</h1>
        <p className={styles.paragrafo}>Digite o seu endereço de e-mail e nós enviaremos um link para resetar sua senha.</p>
        <div className={styles.spacing}>
          <InputTexfield label="Email" />
        </div>
        <div className={styles.spacing}>
          <ButtonAzul onClick={() => navigate('/reset-password-2')}>Proximo</ButtonAzul>
        </div>
        <ButtonBranco onClick={() => navigate('/')}>Cancelar</ButtonBranco>
      </div>
      <div className={styles.rightSide}>
        <img src={logo} alt = "Logo"/>
      </div>
    </div>
  );
};

export default ResetPasswordStep1;
