import React, { useState } from "react";
 import CardCuidador from "../Cards/cards-disponivel/card-cuidador";
 import CardIdoso from "../Cards/cards-disponivel/card-idoso";
 import Style from "./cuidadores.module.css";
 import SelectIndicator from "./select";
 import { useNavigate } from "react-router-dom";

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import BtBranco from "../../botao/btBranco";
 function Disponivel() {
   const navigate = useNavigate();
   const [selectedOption, setSelectedOption] = useState('');
   console.log(selectedOption)

   return (

     <>
      
         <div className={Style["cuidador"]}>
          <div className={Style["centraliza"]}>
          <div className={Style["texto"]}>
          Disponiveis agora
          </div>
          
           <SelectIndicator
            onLoad={(e) => setSelectedOption(e.target.innerText)}
             onChange={(e) => setSelectedOption(e.target.innerText)}
           />
           </div>
           <div className={Style["cards"]}>
            
             {
              selectedOption === ""  && (
                <>
                  <CardCuidador />
                  <CardCuidador />
                  <CardCuidador />
                  <CardCuidador />
                  <CardCuidador />
                  <CardCuidador />
                </>
              )}
             
             {selectedOption === "Cuidador"  && (
               <>
                 <CardCuidador />
                 <CardCuidador />
                 <CardCuidador />
                 <CardCuidador />
                 <CardCuidador />
                 <CardCuidador />
               </>
             )}
             {selectedOption === "Idoso" && (
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
           <div className={Style["btn"]}>
             <BtBranco  onClick={() => navigate("/login")}>
               Ver Todos Os Cuidadores
             </BtBranco>
           </div>
         </div>
      
    </>
  );
 }
 export default Disponivel;



// const App = ({ options }) => {
//   const [selectedOption, setSelectedOption] = useState('');

//   console.log(options)


//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };


//   const renderContent = () => {
//     const selected = options.find(option => option.value === selectedOption);
//     return selected ? <div>{selected.content}</div> : <div>Selecione uma opção</div>;
//   };


//   return (
//     <div>
//       <select value={selectedOption} onChange={handleChange}>
//         {options.map(option => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       {renderContent()}
//     </div>
//   );
// };


// export default App;