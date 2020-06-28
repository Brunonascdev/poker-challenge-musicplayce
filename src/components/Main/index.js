import React, { useState } from 'react';

import {
  Container,
  StyledImage,
  FirstHand,
  SecondHand,
  AlignButtons,
  Deck,
} from './styles';

import Table from '../Table';
import Card from '../Card';

import texasHoldemImage from '../../assets/images/holdem.png';

import { getCards } from '../../utils/getCards';
import { generateAleatory } from '../../utils/generateAleatory';

function Main() {
  const [firstHand, setFirstHand] = useState([]);
  const [secondHand, setSecondHand] = useState([]);

  const deck = getCards();

  const startGame = () => {
    const loadFirstHand = () => {
      const aleatoryGenerated = generateAleatory(deck).splice(0, 5);

      setFirstHand(aleatoryGenerated);
    };

    const loadSecondHand = () => {
      const aleatoryGenerated = generateAleatory(deck).splice(0, 5);

      setSecondHand(aleatoryGenerated);
    };

    loadFirstHand();
    loadSecondHand();
  };

  return (
    <Container>
      <StyledImage src={texasHoldemImage} />

      <Table>
        <FirstHand>
          {firstHand.map((card, index) => (
            <Card cardType={card} key={index} />
          ))}
        </FirstHand>

        <Deck>
          <Card cardType="BLUE_BACK" />
        </Deck>

        <SecondHand>
          {secondHand.map((card, index) => (
            <Card cardType={card} key={index} canHover />
          ))}
        </SecondHand>
      </Table>
      <AlignButtons>
        <button type="button" onClick={startGame}>
          Começar
        </button>
      </AlignButtons>
    </Container>
  );
}

export default Main;
