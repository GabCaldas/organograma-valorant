import './botao.css';

const Botão = props => {
  return (
    <div className="botãotodo">
      <button className="button">
        {props.texto}
        <div className="button__horizontal"></div>
        <div className="button__vertical"></div>
      </button>
    </div>
  );
};

export default Botão;
