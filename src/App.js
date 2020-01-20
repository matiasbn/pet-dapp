import React, { createContext } from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import useWeb3 from 'react-use-web3';
import StorePet from './views/StorePet';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Web3Context = createContext();
function App() {
  const { web3, network } = useWeb3();
  return (
    <div className="App">
      <Web3Context.Provider value={{ web3, network }}>
        <Container fluid>
          <CardDeck>
            <StorePet />
          </CardDeck>
        </Container>
      </Web3Context.Provider>
    </div>
  );
}

export default App;
