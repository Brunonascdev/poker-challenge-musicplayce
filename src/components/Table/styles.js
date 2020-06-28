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
`;

export const BackgroundLogo = styled.img`
  position: absolute;
  opacity: 0.2;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 15%;

  ${css`
    filter: grayscale(100%);
  `}
`;
