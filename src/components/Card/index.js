import React from 'react';

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

export default Card;
