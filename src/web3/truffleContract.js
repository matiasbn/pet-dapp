import TruffleContract from 'truffle-contract';
import PetDapp from '../contracts/PetDapp.json';

const truffleContract = () => {
  const truffleContractInstance = TruffleContract(PetDapp);
  truffleContractInstance.setProvider(window.web3.currentProvider);
  return truffleContractInstance;
};

export default truffleContract;
