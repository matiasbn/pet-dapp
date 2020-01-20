/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardDeck, Button } from 'react-bootstrap';
import truffleContract from '../web3/truffleContract';

const StorePetOnChain = () => {
  const petOwner = useSelector((state) => state.petOwner);
  const pet = useSelector((state) => state.pet);
  const veterinarian = useSelector((state) => state.veterinarian);
  const storePet = async () => {
    console.log(petOwner);
    console.log(pet);
    console.log(veterinarian);
    const petDapp = await truffleContract().deployed();
    const {
      ownerId, name, lastName, idNumber, phoneNumber, ownerAddress,
    } = petOwner;
    await petDapp.registerPetOwner(ownerId, name, lastName, idNumber, phoneNumber, ownerAddress, {
      from: window.web3.eth.defaultAccount,
    });
    const {
      vetId, clinicName, vetAddress, vetName,
    } = veterinarian;
    await petDapp.registerVeterinarian(vetId, clinicName, veterinarian.phoneNumber, vetAddress, vetName, {
      from: window.web3.eth.defaultAccount,
    });
    const {
      petId, species, breed, birthDate, bloodType,
    } = pet;
    await petDapp.registerPet(petId, pet.ownerId, pet.vetId, pet.name, species, breed, birthDate, bloodType, {
      from: window.web3.eth.defaultAccount,
    });
  };

  return (
    <CardDeck>
      <Card>
        <Card.Header as="h5">Click to store pet</Card.Header>
        <Card.Body>
          <Button variant="primary" onClick={async () => { await storePet(); }}>Store pet</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default StorePetOnChain;
