import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonGame from "./PokemonGame.js";
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    
    <Container>
      <PokemonGame/>
    </Container>
    
  );
}

export default App;
