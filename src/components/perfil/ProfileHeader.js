import ReviewComponents from "./ReviewComponents";
import styles from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
    <div className={styles.profileHeader}>
      <div className={styles.user}>
        <div className={styles.userDetails}>
          <img
            className={styles.component5Icon}
            loading="lazy"
            alt=""
            src="/component-5@2x.png"
          />
          <div className={styles.userName}>
            <div className={styles.idosos}>Idosos</div>
          </div>
        </div>
      </div>
      <div className={styles.rating}>
        <div className={styles.starContainer}>
          <div className={styles.stars}>
            <div className={styles.starListParent}>
              <img
                className={styles.starListIcon}
                loading="lazy"
                alt=""
                src="/star-6.svg"
              />
              <img
                className={styles.starListIcon1}
                loading="lazy"
                alt=""
                src="/star-7.svg"
              />
              <img
                className={styles.starListIcon2}
                loading="lazy"
                alt=""
                src="/star-8.svg"
              />
              <img
                className={styles.starListIcon3}
                loading="lazy"
                alt=""
                src="/star-9.svg"
              />
              <img
                className={styles.starListIcon4}
                loading="lazy"
                alt=""
                src="/star-10.svg"
              />
            </div>
          </div>
          <img
            className={styles.ratingSeparatorIcon}
            loading="lazy"
            alt=""
            src="/rectangle-53@2x.png"
          />
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionContent}>
          <div className={styles.descrioParent}>
            <h3 className={styles.descrio}>Descrição</h3>
            <div className={styles.payment}>
              <div className={styles.paymentDetails}>
                <div className={styles.pretendePagarNegociavel}>
                  Pretende pagar: negociavel
                </div>
                <div className={styles.pretendePagarNegociavel1}>
                  Pretende pagar: negociavel
                </div>
              </div>
              <div className={styles.precisaDeUm}>
                Precisa de um: cuidador(a)
              </div>
            </div>
          </div>
          <div className={styles.help}>
            <h3 className={styles.precisaDeAjuda}>Precisa de ajuda com</h3>
            <div className={styles.helpList}>
              <div className={styles.cozinhar}>Cozinhar</div>
              <div className={styles.limparACasa}>Limpar a casa</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        <div className={styles.reviewHeader}>
          <h3 className={styles.classificaoDeOutros}>
            Classificação de outros cuidadores
          </h3>
        </div>
        <div className={styles.reviewContent}>
          <div className={styles.reviewCard}>
            <ReviewComponents />
            <ReviewComponents propAlignSelf="stretch" propFlex="unset" />
          </div>
          <div className={styles.userReview}>
            <ReviewComponents propAlignSelf="unset" propFlex="1" />
          </div>
        </div>
      </div>
      <img className={styles.profileHeaderChild} alt="" src="/line-66.svg" />
    </div>
  );
};

export default ProfileHeader;
