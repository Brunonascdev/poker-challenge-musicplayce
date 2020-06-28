import React from 'react';

import { Container, BackgroundLogo } from './styles';

import texasHoldemImage from '../../assets/images/holdem.png';

function Table({ children }) {
  return (
    <Container>
      <BackgroundLogo src={texasHoldemImage} />
      {children}
    </Container>
  );
}

export default Table;
