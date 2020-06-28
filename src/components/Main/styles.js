import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  margin: 30px auto;
  width: 20%;
  max-width: 200px;
`;

export const FirstHand = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

export const SecondHand = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

export const AlignButtons = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 15px;
    border: 0;
    color: white;
    font-size: 1.2em;
    border-radius: 8px;
    background-color: #00610f;
    background-image: url('https://www.transparenttextures.com/patterns/p6.png');
  }
`;

export const Deck = styled.div`
  margin: 0 30px;
`;
