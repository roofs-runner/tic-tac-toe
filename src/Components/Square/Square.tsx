import React from 'react'
import styled from 'styled-components'

const SquareItem = styled.button`
  border: 1px solid #999;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  height: 60px;
  max-height: 60px;
  padding: 10px;
  text-align: center;
  width: 60px;
  max-width: 60px;
`;

interface SquareProps {
  squareValue: string | null
  onSquareClick: () => void
}

const Square = ({ squareValue, onSquareClick }: SquareProps) => {
  return (
    <SquareItem onClick={onSquareClick}>
      {squareValue}
    </SquareItem>
  )
};

export default Square
