/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Card({ cardType, ...rest }) {
  return (
    <Container {...rest}>
      <img
        src={require(`../../assets/images/cards/${cardType}.svg`)}
        alt="Card Type"
      />
    </Container>
  );
}

Card.defaultProps = {
  cardType: '',
};

Card.propTypes = {
  cardType: PropTypes.string,
};

export default Card;
