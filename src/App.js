import './App.css';
import Lista from './Lista';

function App() {
        const soldados = [
        {id: 1, nome: 'DAVI', cargo: 'COMADANTE', status:'ATIVO'},
        {id: 2, nome: 'DAVID', cargo: 'CABO', status:'FERIDO'},
        {id: 3, nome: 'DAIVUD', cargo: 'TENENTE',status:'MORTO'}
      ]
      
      function handleClick(nome) {
  alert(`${nome} foi selecionado!`);
}

  return (
    <div >
      <Lista soldados={soldados} onSelecionar={handleClick}/>
      <h1>ForTheEmperror</h1>
    </div>
  );
}

export default App;