import GroupComponent from "../../components/perfil/GroupComponent";
import ProfileHeader from "../../components/perfil/ProfileHeader";
import ActionButtons from "../../components/perfil/ActionButtons";
import styles from "./VisualizaoInterna.module.css";

const VisualizaoInterna = () => {
  return (
    <div className={styles.visualizaoInterna}>
      <GroupComponent />
      <main className={styles.content}>
        <section className={styles.profile}>
          <ProfileHeader />
          <div className={styles.contact}>
            <div className={styles.contactDetails}>
              <div className={styles.contactHeader}>
                <div className={styles.contactInfo}>
                  <div className={styles.contactName}>
                    <div className={styles.pedroLucca40}>
                      Pedro Lucca, 40 anos
                    </div>
                    <div className={styles.nameSeparator}>
                      <img
                        className={styles.nameSeparatorChild}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <ActionButtons />
              </div>
              <div className={styles.menuOptionsWrapper}>
                <div className={styles.menuOptions}>
                  <div className={styles.procurar}>Procurar</div>
                  <div className={styles.favoritos}>Favoritos</div>
                  <div className={styles.conversas}>Conversas</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VisualizaoInterna;
