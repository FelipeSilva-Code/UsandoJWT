import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Botao = styled(Link)`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #2f80ca;
  cursor: pointer;
  color: white;
  border: solid;
  &:hover{
      background-color: white;
      text-decoration: none;
  }

`;
