import { useCallback } from "react";
import styles from "./ActionButtons.module.css";
import chatImg from "../../utils/assets/chat@2x.png"
import empityFlag from "../../utils/assets/empty-flag@2x.png"
import heart from "../../utils/assets/heart@2x.png"
import academic from "../../utils/assets/academic@2x.png"
const ActionButtons = () => {
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Chat" to the project
  }, []);

  return (
    <div className={styles.actionButtons}>
      <div className={styles.buttonContainer}>
        <div className={styles.buttons}>
          <div className={styles.buttonOptions}>
            <div className={styles.buttonIcons}>
              <img
                className={styles.emptyFlagIcon}
                loading="lazy"
                alt=""
                src={empityFlag}
              />
              <div className={styles.heartContainer}>
                <img
                  className={styles.heartIcon}
                  loading="lazy"
                  alt=""
                  src={heart}
                />
              </div>
            </div>
          </div>
          <div className={styles.chat}>
            <button className={styles.frameParent} onClick={onGroupButtonClick}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <b className={styles.conversar}>Conversar</b>
              </div>
              <img className={styles.chatIcon} alt="" src={chatImg} />
            </button>
            <div className={styles.careInformation}>
              <div className={styles.informationContent}>
                <div className={styles.bioWrapper}>
                  <div className={styles.bio}>
                    <img
                      className={styles.academicIcon}
                      loading="lazy"
                      alt=""
                      src={academic}
                    />
                    <div className={styles.bioLabel}>
                      <h3 className={styles.idoso}>1 idoso</h3>
                    </div>
                  </div>
                </div>
                <div className={styles.josUmContainer}>
                  <p className={styles.josUm}>
                    José é um idoso que precisa de cuidados devido à fragilidade
                    física e dificuldades de locomoção causadas pela idade
                    avançada. Ele requer assistência para realizar atividades
                    básicas da vida diária, como tomar banho, se vestir,
                    preparar... 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.availability}>
        <div className={styles.availabilityContent}>
          <div className={styles.availabilityHeader}>
            <div className={styles.availabilityTitle}>
              <h3 className={styles.diasQuePrecisa}>
                Dias que precisa de cuidado
              </h3>
            </div>
            <div className={styles.timeOptions}>
              <div className={styles.timeSlots}>
                <img
                  className={styles.sunriseIcon}
                  loading="lazy"
                  alt=""
                  src="/sunrise@2x.png"
                />
                <div className={styles.manh}>manhã</div>
              </div>
              <div className={styles.afternoonIcon}>
                <img
                  className={styles.sunIcon}
                  loading="lazy"
                  alt=""
                  src="/sun@2x.png"
                />
                <div className={styles.tarde}>tarde</div>
              </div>
              <div className={styles.moonPhaseIcon}>
                <img
                  className={styles.crescentMoonIcon}
                  loading="lazy"
                  alt=""
                  src="/crescent-moon@2x.png"
                />
                <div className={styles.noiteWrapper}>
                  <div className={styles.noite}>noite</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className={styles.weekdaySelector}>
          <div className={styles.weekdaySelectorsParent}>
            <input className={styles.weekdaySelectors} type="text" />
            <div className={styles.mondayAvailability} />
            <div className={styles.tuesdayAvailability} />
            <div className={styles.wednesdayAvailability} />
          </div>
          <div className={styles.rectangleGroup}>
            <input className={styles.frameItem} type="text" />
            <div className={styles.mondaySelectorsWrapper}>
              <div className={styles.mondaySelectors} />
            </div>
            <div className={styles.tuesdaySelectorsWrapper}>
              <div className={styles.tuesdaySelectors} />
            </div>
            <div className={styles.wednesdaySelectorsWrapper}>
              <div className={styles.wednesdaySelectors} />
            </div>
          </div>
          <div className={styles.rectangleContainer}>
            <input className={styles.frameInner} type="text" />
            <div className={styles.rectangleWrapper}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.rectangleFrame}>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameChild2} />
            </div>
          </div>
          <div className={styles.rectangleParent1}>
            <input className={styles.rectangleInput} type="text" />
            <div className={styles.rectangleWrapper1}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.rectangleWrapper2}>
              <div className={styles.frameChild4} />
            </div>
            <div className={styles.rectangleWrapper3}>
              <div className={styles.frameChild5} />
            </div>
          </div>
          <div className={styles.rectangleParent2}>
            <input className={styles.frameChild6} type="text" />
            <div className={styles.rectangleWrapper4}>
              <div className={styles.frameChild7} />
            </div>
            <div className={styles.rectangleWrapper5}>
              <div className={styles.frameChild8} />
            </div>
            <div className={styles.rectangleWrapper6}>
              <div className={styles.frameChild9} />
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild10} />
            <div className={styles.rectangleWrapper7}>
              <div className={styles.frameChild11} />
            </div>
            <div className={styles.rectangleWrapper8}>
              <div className={styles.frameChild12} />
            </div>
            <div className={styles.rectangleWrapper9}>
              <div className={styles.frameChild13} />
            </div>
          </div>
          <div className={styles.segundaFeira}>Segunda-feira</div>
          <div className={styles.domingo}>Domingo</div>
          <div className={styles.teraFeira}>Terça-feira</div>
          <div className={styles.quartaFeira}>Quarta-feira</div>
          <div className={styles.quintaFeira}>Quinta-feira</div>
          <div className={styles.sextaFeira}>Sexta-feira</div>
          <div className={styles.saturdaySelection}>
            <div className={styles.saturdaySelectorParent}>
              <div className={styles.saturdaySelector} />
              <div className={styles.saturdayNameLabel}>
                <div className={styles.sbado}>Sábado</div>
              </div>
            </div>
            <div className={styles.saturdaySelectors} />
            <div className={styles.saturdaySelectors1} />
            <div className={styles.saturdaySelectors2} />
          </div>
          <button className={styles.selectAllDaysButton}>
            <div className={styles.allDaysSelector} />
            <div className={styles.selecionarTodosOs}>
              Selecionar todos os dias
            </div>
          </button>
          <div className={styles.weekdaySelectorChild} />
        </form>
      </div>
    </div>
  );
};

export default ActionButtons;
