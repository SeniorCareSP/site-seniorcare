import { useMemo } from "react";
import styles from "./ReviewComponents.module.css";

const ReviewComponents = ({ propAlignSelf, propFlex }) => {
  const reviewComponentsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div className={styles.reviewComponents} style={reviewComponentsStyle}>
      <div className={styles.reviewSeparator} />
      <div className={styles.reviewIcon} />
      <div className={styles.umIdosoMuitoGentilESimptWrapper}>
        <div className={styles.umIdosoMuito}>
          “Um idoso muito gentil e simpático, colaborou com as atividades e me
          tratou bem”
        </div>
      </div>
      <div className={styles.reviewFooter}>
        <div className={styles.userIcon} />
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
      </div>
    </div>
  );
};

export default ReviewComponents;
