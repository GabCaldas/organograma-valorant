import './formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botão from '../Botão';
import { useState } from 'react';

const Formulario = props => {
  const classes = ['Duelista', 'Iniciador', 'Sentinela', 'Controlador'];
  const [nome, setNome] = useState('');
  const [nickname, setNickname] = useState('');
  const [imagem, setImagem] = useState('');
  const [classe, setClasse] = useState('');

  const aoSalvar = evento => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({ nome, nickname, imagem, classe });
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar} className="formulariogeral">
        <h2 className="sub-titulo"> Preencha os campos abaixo pra criar seu card de jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        ></CampoTexto>
        <CampoTexto
          obrigatorio={true}
          label="Nickname"
          placeholder="Digite seu nickname no jogo"
          valor={nickname}
          aoAlterado={valor => setNickname(valor)}
        ></CampoTexto>
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Escolha sua foto"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        ></CampoTexto>
        <ListaSuspensa
          obrigatorio={true}
          label="Classe"
          itens={classes}
          valor={classe}
          aoAlterado={valor => setClasse(valor)}
        ></ListaSuspensa>
        <Botão texto="Criar Card"></Botão>
      </form>
    </section>
  );
};

export default Formulario;
