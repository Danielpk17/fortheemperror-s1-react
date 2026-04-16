import { useState } from "react";

function Formulario ({ onAdicionar }) {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');

    return (
        <div>
        <input 
        value={nome}
        onChange={(e) => setNome(e.target.value)} />   
        <input
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
        />
        <button onClick={() => onAdicionar (`${nome}`, `${cargo}`)}>ADICIONAR</button>
        </div>
    );
}

export default Formulario;