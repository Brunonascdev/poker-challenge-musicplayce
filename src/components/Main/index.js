import React from 'react';

import { Container, StyledImage } from './styles';

import Table from '../Table';

import texasHoldemImage from '../../assets/images/holdem.png';

function Main() {
  return (
    <Container>
      <StyledImage src={texasHoldemImage} />

      <Table>{/* <Deck /> */}</Table>
    </Container>
  );
}

export default Main;
