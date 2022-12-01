import PlayerCard from '../Playercard'
import './Classe.css'

const Classe = (props) => {
    const cssfundo = {backgroundColor:props.corSecundaria}
    const cssclasse ={color:props.corPrimaria}
    return (
        (props.colaboradores.length >0) ? <section className='classe' style={cssfundo}>
            <h3 style={cssclasse}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => 
            <PlayerCard nome={colaborador.nome} 
            nickname={colaborador.nickname} 
            imagem={colaborador.imagem} 
            classe={colaborador.classe}></PlayerCard>)}
            </div>
        </section>
        : ''
    )
}

export default Classe;