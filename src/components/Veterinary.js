import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Veterinary = (props) => {
  const {
    clinicName, phoneNumber, address, vetName,
  } = props;
  return (
    <CardDeck>
      <Card>
        <Card.Header as="h5">Clinic Name</Card.Header>
        <Card.Body>
          <Card.Title>{clinicName}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Phone number</Card.Header>
        <Card.Body>
          <Card.Title>{phoneNumber}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Address</Card.Header>
        <Card.Body>
          <Card.Title>{address}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Veterinarian Name</Card.Header>
        <Card.Body>
          <Card.Title>{vetName}</Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

Veterinary.propTypes = {
  clinicName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  vetName: PropTypes.string.isRequired,
};

export default Veterinary;
