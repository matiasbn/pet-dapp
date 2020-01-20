import React from 'react';
import { Container } from 'react-bootstrap';
import Pet from '../components/Pet';
import Owner from '../components/Owner';
import Veterinary from '../components/Veterinary';

const SavePet = () => (
  <Container fluid>
    <Pet
      name="Jager"
      species="Dog"
      breed="Border Collie"
      birthDate="4/11/19"
      bloodType="SuperHappy+"
      id="502091145670627"
    />
    <Owner
      name="Matías"
      lastName="Barrios"
      idNumber="123456789"
      phoneNumber="+56912345678"
      address="Evergreen Terrace 742"
    />
    <Veterinary
      clinicName="PorLosKiltros"
      phoneNumber="+56912345678"
      address="Evergreen Terrace 742"
      vetName="Rosalis Pulido"
    />
  </Container>
);

export default SavePet;
