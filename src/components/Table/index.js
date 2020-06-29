import React from 'react';
import PropTypes from 'prop-types';

import { Container, BackgroundLogo } from './styles';

import texasHoldemImage from '../../assets/images/holdem.png';

function Table({ children }) {
  return (
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
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;
