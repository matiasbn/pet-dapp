import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Pet = (props) => {
  const {
    name, species, breed, birthDate, bloodType, id,
  } = props;
  return (
    <CardDeck>
      <Card>
        <Card.Header as="h5">Name</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Species</Card.Header>
        <Card.Body>
          <Card.Title>{species}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Breed</Card.Header>
        <Card.Body>
          <Card.Title>{breed}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Birth Date</Card.Header>
        <Card.Body>
          <Card.Title>{birthDate}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Blood type</Card.Header>
        <Card.Body>
          <Card.Title>{bloodType}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">ID</Card.Header>
        <Card.Body>
          <Card.Title>{id}</Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  bloodType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Pet;
