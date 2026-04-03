import Cartao from "./Cartao";

function Lista ({soldados}) {
    return (
        <div>
         {soldados.map(soldado => (
            <Cartao key={soldado.id} id={soldado.id} nome={soldado.nome} cargo={soldado.cargo} />
      ))}
        </div>
    );
}

export default Lista;