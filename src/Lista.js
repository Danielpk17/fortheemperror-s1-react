import Cartao from "./Cartao";

function Lista ({soldados, onSelecionar}) {
    return (
        <div>
         {soldados.map(soldado => (
            <Cartao key={soldado.id} id={soldado.id} nome={soldado.nome} cargo={soldado.cargo} status={soldado.status} onSelecionar={onSelecionar}/>
      ))}
        </div>
    );
}

export default Lista;