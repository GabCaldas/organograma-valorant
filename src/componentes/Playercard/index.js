import './playerCard.css'

const Playercard = ({nome,imagem,classe,nickname}) => {
    return (<div className='playercard'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome}></img>
        </div>
        <div className='rodape'>
        <h3>{nome}</h3>
        <h4>{nickname}</h4>
        <h5>{classe}</h5>
        </div>
        
    </div>)

}

export default Playercard;