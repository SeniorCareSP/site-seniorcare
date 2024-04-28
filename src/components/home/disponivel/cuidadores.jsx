import React, { useState } from "react";
import CardCuidador from "../Cards/cards-disponivel/card-cuidador";
import CardIdoso from "../Cards/cards-disponivel/card-idoso";
import Style from "./cuidadores.module.css";
import SelectIndicator from "./select";
import { useNavigate } from "react-router-dom";

function Disponivel() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("cuidador");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>
        <div className={Style["cuidador"]}>
          <SelectIndicator
            value={selectedOption}
            onChange={handleOptionChange}
          />
          <div className={Style["cards"]}>
            {selectedOption === "cuidador" && (
              <>
                <CardCuidador />
                <CardCuidador />
                <CardCuidador />
                <CardCuidador />
                <CardCuidador />
                <CardCuidador />
              </>
            )}
            {selectedOption === "idoso" && (
              <>
              
                <CardIdoso/>
                <CardIdoso/>
                <CardIdoso/>
                <CardIdoso/>
                <CardIdoso/>
                <CardIdoso/>

              </>
            )}
          </div>
          <div>
            <button onClick={() => navigate("/procurar")}>
              Ver Todos Os Cuidadores
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Disponivel;