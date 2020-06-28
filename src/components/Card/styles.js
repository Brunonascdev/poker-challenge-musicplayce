import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 11%;
  border-radius: 4px;
  background: white;
  border: 1px solid #222;
  margin-left: -2%;
  -webkit-box-shadow: -5px 6px 23px -13px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: -5px 6px 23px -13px rgba(0, 0, 0, 0.52);
  box-shadow: -5px 6px 23px -13px rgba(0, 0, 0, 0.52);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  &:hover {
    ${(props) =>
      props.canHover &&
      css`
        margin-top: -10px;
      `}
  }
`;
