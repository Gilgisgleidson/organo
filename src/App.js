import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Equipe 1',
      primaryColor: '#57c278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Equipe 2',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Equipe 3',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Equipe 4',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Equipe 5',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Equipe 6',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    },
  ]

  const [cards, setCards] = useState([])

  const onNewCard = (card) => {
    setCards([...cards, card ])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onSubmitting={cards => onNewCard(cards)}/>
      {teams.map(team => 
        <Team 
          key={team.name} 
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          cards={cards.filter(card => card.team === team.name)}
        />)}
        <Footer />
    </div>
  );
}

export default App;
