import './App.css';
import Lista from './Lista';

function App() {
        const soldados = [
        {id: 1, nome: 'DAVI', cargo: 'COMADANTE'},
        {id: 2, nome: 'DAVID', cargo: 'CABO'},
        {id: 3, nome: 'DAIVUD', cargo: 'TENENTE'}
      ]
  return (
    <div >
      <Lista soldados={soldados}/>
      <h1>ForTheEmperror</h1>
    </div>
  );
}

export default App;