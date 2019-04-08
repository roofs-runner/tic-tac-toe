import React from 'react'
import Square from '../Square'
import styled from 'styled-components'

const BoardRow = styled.div`

`;

const Status = styled.div`
  margin-bottom: 10px;
`;

const Board = () => {
  // rows = 3;
  // cells = 3;
  const status = 'Next player: X';

  const renderSquare = (i: number) => {
    return (
      <Square />
    )
  };

    return (
      <div>
        <Status>{status}</Status>
        <BoardRow>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </BoardRow>
      </div>
    );
  };


  // private _renderRows = () => {
  //   return Array.from({length: this.rows}).map((rows, index) =>
  //     <TableRow key={index}>
  //       {Array.from({length: this.cells}).map(cell => this._renderCells())}
  //     </TableRow>);
  //
  // };

  // private _renderCells = () => {
  //   return (
  //     <TableCell>{'O'}</TableCell>
  //   )
  // };

export default Board