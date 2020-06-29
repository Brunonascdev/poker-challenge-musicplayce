import React, { useState, useCallback, useEffect } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import {
  Container,
  StyledImage,
  FirstHand,
  SecondHand,
  AlignButtons,
  Deck,
  ModalDiv,
  Button,
} from './styles';

import Table from '../Table';
import Card from '../Card';

import texasHoldemImage from '../../assets/images/holdem.png';

import { getCards } from '../../utils/getCards';
import { generateAleatory } from '../../utils/generateAleatory';

const { Hand } = require('pokersolver');

function Main() {
  const [firstHand, setFirstHand] = useState([]);
  const [secondHand, setSecondHand] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState('');
  const [message, setMessage] = useState('');

  const deck = getCards();

  const showModal = () => {
    setModalVisibility(true);
  };

  const hideModal = () => {
    setModalVisibility(false);
  };

  const checkWinner = useCallback(async (opponent, you) => {
    function timeoutForModal() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1200);
      });
    }

    if (opponent.length > 0 && you.length > 0) {
      const opponentHand = Hand.solve(opponent);
      const yourHand = Hand.solve(you);

      if (opponentHand.rank > yourHand.rank) {
        setLoading(true);
        setWinner('Oponente');
        setMessage('Você perdeu! tente novamente.');
        await timeoutForModal();
        await showModal();
        setLoading(false);
      }

      if (yourHand.rank > opponentHand.rank) {
        setLoading(true);
        setWinner('Você');
        setMessage('Você ganhou! Parabéns!');
        await timeoutForModal();
        await showModal();
        setLoading(false);
      }

      if (opponentHand.rank === yourHand.rank) {
        setLoading(true);
        setWinner('Empate');
        setMessage('Houve um empate! tente novamente.');
        await timeoutForModal();
        await showModal();
        setLoading(false);
      }
    }
  }, []);

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

  useEffect(() => {
    checkWinner(firstHand, secondHand);
  }, [checkWinner, firstHand, secondHand]);

  return (
    <Container>
      <StyledImage src={texasHoldemImage} />

      <Rodal visible={modalVisibility} onClose={hideModal}>
        <ModalDiv>
          {winner && message && (
            <>
              <h1>{winner === 'Empate' ? 'Empate!' : `Vencedor: ${winner}`}</h1>
              <h2>{message}</h2>
              <Button
                type="button"
                onClick={() => {
                  startGame();
                  hideModal();
                }}
              >
                Jogar novamente
              </Button>
            </>
          )}
        </ModalDiv>
      </Rodal>

      <Table>
        <FirstHand>
          {firstHand.map((card) => (
            <Card cardType="BLUE_BACK" key={card} />
          ))}
        </FirstHand>

        <Deck>
          <Card cardType="BLUE_BACK" />
        </Deck>

        <SecondHand>
          {secondHand.map((card) => (
            <Card cardType={card} key={card} canHover />
          ))}
        </SecondHand>
      </Table>
      <AlignButtons>
        <Button type="button" onClick={startGame} disabled={loading}>
          {loading ? 'Gerando Resultado' : 'Começar'}
        </Button>
      </AlignButtons>
    </Container>
  );
}

export default Main;
