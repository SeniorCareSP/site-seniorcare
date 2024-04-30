import React, { useState } from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function SelectIndicator({ value, onChange }) {
  
  return (
    <Select
      variant='soft'
      placeholder="Selecione"
      indicator={<KeyboardArrowDown />}
      value={value} // Definindo o valor selecionado
      onChange={onChange} // Função de retorno de chamada para enviar de volta o valor selecionado
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
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
