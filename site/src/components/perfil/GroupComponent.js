import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GroupComponent.module.css";
import dsjak from "../../utils/assets/dsjak-4@2x.png"
import ellipse from "../../utils/assets/ellipse-24@2x.png"
const GroupComponent = () => {
  const navigate = useNavigate();

  const onFavoritosTextClick = useCallback(() => {
    // Please sync "Visualização Interna" to the project
  }, []);

  const onConversasTextClick = useCallback(() => {
    // Please sync "Visualização Interna" to the project
  }, []);

  const onLogoutIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFavoritosText1Click = useCallback(() => {
    // Please sync "Visualização Interna" to the project
  }, []);

  const onConversasText1Click = useCallback(() => {
    // Please sync "Visualização Interna" to the project
  }, []);

  return (
    <div className={styles.favoritosParent}>
      <b className={styles.favoritos} onClick={onFavoritosTextClick}>
        Favoritos
      </b>
      <b className={styles.conversas} onClick={onConversasTextClick}>
        Conversas
      </b>
      <img
        className={styles.logoutIcon}
        alt=""
        src="/logout@2x.png"
        onClick={onLogoutIconClick}
      />
      <header className={styles.frameChild} />
      <div className={styles.separator} />
      <div className={styles.searchContainer}>
        <img
          className={styles.dsjak4Icon}
          loading="lazy"
          alt=""
          src={dsjak}
        />
      </div>
      <div className={styles.searchBar}>
        <b className={styles.procurar}>Procurar</b>
      </div>
      <div className={styles.categories}>
        <b className={styles.favoritos1} onClick={onFavoritosText1Click}>
          Favoritos
        </b>
      </div>
      <div className={styles.categories1}>
        <b className={styles.conversas1} onClick={onConversasText1Click}>
          Conversas
        </b>
      </div>
      <div className={styles.searchIcon}>
        <img
          className={styles.icon}
          loading="lazy"
          alt=""
          src={ellipse}
        />
      </div>
    </div>
  );
};

export default GroupComponent;
