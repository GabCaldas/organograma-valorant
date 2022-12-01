import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Classe from './componentes/Classe';



function App() {

  const classes= [
    {
      nome:'Duelista',
      corPrimaria:'#e55743',
      corSecundária:'#101823',
    },
    {
      nome:'Iniciador',
      corPrimaria:'#e55743',
      corSecundária:'#101823'
    },
    {
      nome:'Sentinela',
      corPrimaria:'#e55743',
      corSecundária:'#101823'
    },
    {
      nome:'Controlador',
      corPrimaria:'#e55743',
      corSecundária:'#101823'
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = colaborador => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
       classes={classes.map(classe=>classe.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {classes.map(classe=> <Classe
       key={classe.nome}
       nome={classe.nome} 
       corPrimaria={classe.corPrimaria}
       corSecundária={classe.corSecundária}
       colaboradores={colaboradores.filter(colaborador => colaborador.classe === classe.nome)}></Classe>)}
    </div>
  );
}

export default App;
