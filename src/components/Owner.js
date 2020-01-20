import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Owner = (props) => {
  const {
    name, lastName, idNumber, phoneNumber, address,
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
        <Card.Header as="h5">Last name</Card.Header>
        <Card.Body>
          <Card.Title>{lastName}</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">ID number</Card.Header>
        <Card.Body>
          <Card.Title>{idNumber}</Card.Title>
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
    </CardDeck>
  );
};

Owner.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  idNumber: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Owner;
