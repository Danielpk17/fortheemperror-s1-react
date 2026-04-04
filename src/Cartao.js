function Cartao ({nome, cargo, id, status}) {
    return (
        <div>
            <h2>{cargo}</h2>
            <p>{nome}</p>
            {id === 1 ? <h1>👑 Líder</h1> : <h3>⚔️ Soldado</h3>}
            {status === "ATIVO" ? <h3 style={{color: 'green'}}>ATIVO</h3> : null}
            {status === "FERIDO" ? <h3 style={{color: 'yellow'}} >FERIDO</h3> : null}
            {status === "MORTO" ? <h3 style={{color: 'red'}}>MORTO</h3> : null}
        </div>
    );
}

export default Cartao;