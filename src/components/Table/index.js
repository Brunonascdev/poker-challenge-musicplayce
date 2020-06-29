import React from 'react';
import PropTypes from 'prop-types';

import { Container, BackgroundLogo, Opponent, You } from './styles';

import texasHoldemImage from '../../assets/images/holdem.png';

function Table({ children }) {
  return (
    <>
      <Opponent>Oponente</Opponent>
      <Container>
        <BackgroundLogo src={texasHoldemImage} />
        {children}
        <p>
          Bruno Nascimento <br />
          <a href="https://github.com/Brunonascdev" target="blank">
            @brunonascdev
          </a>
        </p>
      </Container>
      <You>Você</You>
    </>
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
