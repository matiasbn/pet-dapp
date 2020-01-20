import React from 'react';
import { Container } from 'react-bootstrap';
import Pet from '../components/store/Pet';
import Owner from '../components/store/Owner';
import Veterinary from '../components/store/Veterinary';
import Account from '../components/Account';
import StorePetOnChain from '../components/StorePetOnChain';
import pet from '../common/pet';
import petOwner from '../common/petOwner';
import veterinarian from '../common/veterinarian';

const StorePet = () => (
  <Container fluid>
    <Pet
      name={pet.name}
      species={pet.species}
      breed={pet.breed}
      birthDate={pet.birthDate}
      bloodType={pet.bloodType}
      id={pet.petId}
    />
    <Owner
      name={petOwner.name}
      lastName={petOwner.lastName}
      idNumber={petOwner.ownerId}
      phoneNumber={petOwner.phoneNumber}
      address={petOwner.ownerAddress}
    />
    <Veterinary
      address={veterinarian.vetAddress}
      clinicName={veterinarian.clinicName}
      phoneNumber={veterinarian.phoneNumber}
      vetName={veterinarian.vetName}
    />
    <Account
      account="{props.web3.defaultAccount}"
    />
    <StorePetOnChain />
  </Container>
);
export default StorePet;
