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
          <Card.Title as="input" defaultValue={name}></Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Last name</Card.Header>
        <Card.Body>
          <Card.Title as="input" defaultValue={lastName}></Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">ID number</Card.Header>
        <Card.Body>
          <Card.Title as="input" defaultValue={idNumber}></Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Phone number</Card.Header>
        <Card.Body>
          <Card.Title as="input" defaultValue={phoneNumber}></Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header as="h5">Address</Card.Header>
        <Card.Body>
          <Card.Title as="input" defaultValue={address}></Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

Owner.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  idNumber: PropTypes.number.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default Owner;
