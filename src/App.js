import './App.css';
import Lista from './Lista';
import Formulario from './Formulario';
import { useState } from 'react';

function App() {
        const [soldados, setSoldados] = useState([
        {id: 1, nome: 'DAVI', cargo: 'COMADANTE', status:'ATIVO'},
        {id: 2, nome: 'DAVID', cargo: 'CABO', status:'FERIDO'},
        {id: 3, nome: 'DAIVUD', cargo: 'TENENTE',status:'MORTO'}
      ])

        function handleAdicionar(nome, cargo) {
          setSoldados([...soldados, {id: soldados.length + 1, nome, cargo, status: 'ATIVO'}])
      }
      
      function handleClick(nome) {
          alert(`${nome} foi selecionado!`);
      }
      

  return (
    <div >
      <Formulario onAdicionar={handleAdicionar}/>
      <Lista soldados={soldados} onSelecionar={handleClick}/>
      <h1>ForTheEmperror</h1>
    </div>
  );


}

export default App;