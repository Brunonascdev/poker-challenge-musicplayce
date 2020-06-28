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
import { aleatoryNumber } from '../../utils/aleatoryNumber';

function Main() {
  const [firstHand, setFirstHand] = useState([]);
  const [secondHand, setSecondHand] = useState([]);

  const deck = getCards();

  const startGame = () => {
    const loadFirstHand = () => {
      const cards = [];

      for (let i = 0; i < 5; i++) {
        const generatedAleatoryNumber = aleatoryNumber(0, deck.length - 1);

        console.log(generatedAleatoryNumber);

        if (cards.findIndex((el) => el === cards[generatedAleatoryNumber])) {
          cards.push(deck[generatedAleatoryNumber]);
        } else {
          cards.push(deck[aleatoryNumber(0, deck.length - 1)]);
        }
      }

      setFirstHand(cards);
    };

    const loadSecondHand = () => {
      const cards = [];

      for (let i = 0; i < 5; i++) {
        cards.push(deck[aleatoryNumber(0, deck.length - 1)]);
      }

      setSecondHand(cards);
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
