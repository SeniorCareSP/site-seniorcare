import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RecuperarSenha.module.css';
import logo from '../../utils/assets/logoapertadinha.svg';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import InputTexfield from '../Input/Input';
import voltar from '../../utils/assets/setaVoltar.png';

const RecuperarSenhaCons = ({ email }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={voltar} className={styles.backButton} onClick={() => navigate("/")} />
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.content}>
          <h1>Defina a senha</h1>
          <p className={styles.email}>{email}</p>
          <div className={styles.spacing}>
            <InputTexfield label="Senha" />
          </div>
          <div className={styles.spacing}>
            <InputTexfield label="Confirme a senha" />
          </div>
          <div className={styles.spacing}>
            <ButtonAzul onClick={() => navigate('/reset-password-2')}>Concluido</ButtonAzul>
          </div>
          <ButtonBranco onClick={() => navigate('/')}>Cancelar</ButtonBranco>
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenhaCons;
