/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardDeck } from 'react-bootstrap';
import ACTION_TYPES from '../../store/actionTypes';

const Pet = () => {
  const dispatch = useDispatch();
  const pet = useSelector((state) => state.pet);
  return (
    <CardDeck>
      <Card>
        <Card.Header as="h5">Name</Card.Header>
        <Card.Body>
          <Card.Title
            as="input"
            onChange={(event) => dispatch({ type: ACTION_TYPES.petNameChanged, value: event.target.value })}
            defaultValue={pet.name}
          >
          </Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Species</Card.Header>
        <Card.Body>
          <Card.Title
            as="input"
            onChange={(event) => dispatch({ type: ACTION_TYPES.petSpeciesChanged, value: event.target.value })}
            defaultValue={pet.species}
          >
          </Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Breed</Card.Header>
        <Card.Body>
          <Card.Title
            as="input"
            onChange={(event) => dispatch({ type: ACTION_TYPES.petBreedChanged, value: event.target.value })}
            defaultValue={pet.breed}
          >
          </Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Birth Date</Card.Header>
        <Card.Body>
          <Card.Title
            as="input"
            onChange={(event) => dispatch({ type: ACTION_TYPES.petBirthChanged, value: event.target.value })}
            defaultValue={pet.birthDate}
          >
          </Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Blood type</Card.Header>
        <Card.Body>
          <Card.Title
            as="input"
            onChange={(event) => dispatch({ type: ACTION_TYPES.petBloodTypeChanged, value: event.target.value })}
            defaultValue={pet.bloodType}
          >
          </Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">ID</Card.Header>
        <Card.Body>
          <Card.Title
            as="input"
            onChange={(event) => dispatch({ type: ACTION_TYPES.petIDChanged, value: event.target.value })}
            defaultValue={pet.petId}
          >
          </Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default Pet;
