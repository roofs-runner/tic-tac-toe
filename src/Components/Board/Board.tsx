import React, {useState} from 'react'
import Square from '../Square'
import styled from 'styled-components'

const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BoardRow = styled.div`
  display: flex;
`;

const Status = styled.div`
  margin-bottom: 10px;
`;

// interface  BoardSquaresState {
//   squares: (string | null)[]
//   setSquares: () => void
// }

const Board = () => {
  // rows = 3;
  // cells = 3;
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);
  const status = `Next player: ${isXNext ? 'X' : 'O'}`;

  const renderSquare = (i: number) => {
    return (
      <Square squareValue={squares[i]} onSquareClick={() => clickSquare(i)}/>
    )
  };

  const clickSquare = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    console.log(squares);
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'x' : 'o';
    setXNext(!isXNext);
    setSquares(newSquares);
  };

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);

  return (
    <GameWrapper>
      <Status>{status}</Status>
      {winner ? <div>{`The winner is ${winner}`}</div> : null}
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
    </GameWrapper>
  );
};

export default Board