import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #0b8200;
  background-image: url('https://www.transparenttextures.com/patterns/bedge-grunge.png');
  border: 4px solid #2e0b00;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  height: 60%;
  max-height: 600px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  box-shadow: inset 0px 0px 20px 10px rgba(0, 0, 0, 0.4);

  p {
    position: absolute;
    margin: 2%;
    font-size: 0.8em;

    a {
      color: #000;
      text-decoration: none;
      transition: font-size 0.2s;

      &:hover {
        font-size: 1.1em;
      }
    }
  }
`;

export const BackgroundLogo = styled.img`
  position: absolute;
  opacity: 0.2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  width: 15%;
  max-width: 150px;

  ${css`
    filter: grayscale(100%);
  `}
`;

export const You = styled.span`
  background: white;
  padding: 15px;
  width: 10%;
  max-width: 100px;
  min-width: 100px;
  text-align: center;
  border-radius: 0 0 50% 50%;
  font-weight: bold;
  font-size: 1em;
`;

export const Opponent = styled(You)`
  border-radius: 50% 50% 0 0;
`;
