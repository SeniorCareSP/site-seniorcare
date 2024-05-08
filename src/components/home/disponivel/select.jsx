import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SelectIndicator({ value, onChange }) {
  

// const SelectDispo = styled(Select)({
//   color: '#ffffff',
//   backgroundColor: '#2C7595',
//   borderRadius: '1.2vh',
//   fontSize: '1.7vh',
//   width: '19vw',
//   height: '5.5vh',
//   '&:hover': {
//       backgroundColor: '#2C7595',
//   },
// });

  return (
    <Select
      // variant='soft'
      placeholder="Selecione"
      indicator={<KeyboardArrowDown />}
      value={value} // Definindo o valor selecionado
      onChange={onChange} // Função de retorno de chamada para enviar de volta o valor selecionado
      sx={{
        width: 280,
        height: '5vh',
        borderRadius: '1vh',
        border: 1,
        fontSize: '1.7vh',
        color: '#ffffff',
        backgroundColor: '#2C7595',
        ":hover":{ backgroundColor: '#2C7595'},

        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
            backgroundColor: '#2C7595',
          },
        },
      }}
    >
       
      <Option value="cuidador">Cuidador</Option>
      <Option value="idoso">Idoso</Option>
     </Select>
  );
}




// const App = () => {
//   const [selectedOption, setSelectedOption] = useState();


//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };


//   const renderContent = () => {
//     switch (selectedOption) {
//       case 'idoso':
//         return <div><CardIdoso/></div>;
//       case 'Cuidador':
//         return <div><CardCuidador/></div>;
//       default:
//         return <div>Selecione uma opção</div>;
//     }
//   };


//   return (
//     <div>
//       <select value={selectedOption} onChange={handleChange}>
//         <option value="idoso">Opção 1</option>
//         <option value="cuidador">Opção 2</option>
//       </select>
//       {renderContent()}
//     </div>
//   );
// };

// export default App;
