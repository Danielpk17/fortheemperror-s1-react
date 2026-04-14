 function Botao({onClick, nome}) {
                return <button onClick={() => onClick(`${nome}`)}>SELECIONAR</button>
            }

export default Botao;