import styles from "./porque.module.css";
import "./global.css";
import Approval from "../../../utils/assets/Approval.png";
import healthFood from "../../../utils/assets/Healthy Food.png";
import Honesty from "../../../utils/assets/Honesty.png";
const PorQue = () => {
  return (
    <div className={styles.porQue}>
        <div className={styles.content}>
      <section className={styles.approvalParent}>
        <img
          className={styles.approvalIcon}
          loading="lazy"
          alt=""
          src={Approval}
        />
        <h1 className={styles.porQueEscolher}>
          Por que Escolher a Sênior Care?
        </h1>
      </section>
      <div className={styles.teste}>
      <footer className={styles.wellbeingFeaturesParent}>
        <div className={styles.wellbeingFeatures}>
          <div className={styles.bemEstarEmPrimeiroLugarAParent}>
            <div className={styles.bemEstarEmPrimeiroContainer}>
              <p className={styles.bemEstarEmPrimeiroLugar}>
                <span>
                  <b className={styles.bemEstarEmPrimeiro}>
                    Bem-estar em Primeiro Lugar
                  </b>
                </span>
                <span>
                  <span>{` `}</span>
                </span>
              </p>
              <p className={styles.aSniorCareOfereceUmaSolu}>
                <span>
                  <span>
                    A Sênior Care oferece uma solução abrangente e acessível
                    para
                  </span>
                  <span className={styles.melhorarAQualidade}>
                    {" "}
                    melhorar a qualidade
                  </span>
                  <span className={styles.deVidaDos}>
                    {" "}
                    de vida dos idosos e suas famílias.
                  </span>
                </span>
              </p>
            </div>
            <div className={styles.foodIcon}>
              <img
                className={styles.healthyFoodIcon}
                loading="lazy"
                alt=""
                src={healthFood}
              />
            </div>
          </div>
          <div className={styles.confiabilidadeGarantidaOsCuWrapper}>
            <div className={styles.confiabilidadeGarantidaOsContainer}>
              <p className={styles.confiabilidadeGarantida}>
                <span>
                  <b>Confiabilidade Garantida</b>
                </span>
              </p>
              <p className={styles.osCuidadoresDaSniorCareS}>
                <span>
                  <span>{`Os cuidadores da Sênior Care são `}</span>
                  <span
                    className={styles.selecionadosEVerificados}
                  >{`selecionados e verificados `}</span>
                  <span>
                    com rigor para garantir os mais altos padrões de qualidade.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.honestyParent}>
          <img
            className={styles.honestyIcon}
            loading="lazy"
            alt=""
            src={Honesty}
          />
          <div className={styles.simplicidadeEConveninciaContainer}>
            <p className={styles.simplicidadeEConvenincia}>
              <b>Simplicidade e Conveniência</b>
            </p>
            <p className={styles.perfisDetalhadosAvaliaes}>
              Perfis detalhados, avaliações de clientes, agendamento flexível e
              segurança.
            </p>
          </div>
        </div>
      </footer>
      </div>
      </div>
    </div>
  );
};

export default PorQue;
