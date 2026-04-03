function Cartao ({nome, cargo, id}) {
    return (
        <div>
            <h2>{cargo}</h2>
            <p>{nome}</p>
            {id === 1 ? <h1>👑 Líder</h1> : <h3>⚔️ Soldado</h3>}
        </div>
    );
}

export default Cartao;