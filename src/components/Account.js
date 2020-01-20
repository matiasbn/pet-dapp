import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Account = (props) => {
  console.log();
  return (
    <CardDeck>
      <Card>
        <Card.Header as="h5">Your account</Card.Header>
        <Card.Body>
          <Card.Title as="h5">{window.web3.eth.defaultAccount}</Card.Title>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default Account;

Account.propTypes = {
  account: PropTypes.string.isRequired,
};
