import React from 'react'
import styled from 'styled-components'

const SquareItem = styled.button`
  border: 1px solid #999;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  padding: 0;
  text-align: center;
  width: 34px;
`;

const Square = () => {
  return (
    <SquareItem>
      Some button
    </SquareItem>
  )
};

export default Square
