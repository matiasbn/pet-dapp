import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import SavePet from './views/SavePet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <CardDeck>
          <SavePet name="Hola" />
        </CardDeck>
      </Container>
    </div>
  );
}

export default App;
