import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimária: '#57C278',
      corSecundária: '#D9F7e9',
    },
    {
      nome:'Front-End',
      corPrimária: '#82CFFA',
      corSecundária: '#E8F8FF',
    },
    {
      nome:'Data Science',
      corPrimária: '#A6D157',
      corSecundária: '#F0F8E2',
    },
    {
      nome:'Devops',
      corPrimária: '#E06B69',
      corSecundária: '#FDE7E8',
    },
    {
      nome:'UX e Design',
      corPrimária: '#D86EBF',
      corSecundária: '#FAE9F5',
    },
    {
      nome:'Mobile',
      corPrimária: '#FFBA05',
      corSecundária: '#FFF5D9',
    },
    {
      nome:'Inovação e Gestão',
      corPrimária: '#FF8A29',
      corSecundária: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger    
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado (colaborador)}/>      
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimária={time.corPrimária} 
        corSecundária={time.corSecundária}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
      <Rodape />
    </div>
  );
}

export default App;
