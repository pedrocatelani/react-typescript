import { useState } from 'react';
import { Square } from '../Square';
import './styles.css';
import { CalculateWinner } from './winner';
import { BoardProps } from '../types';

export function Board({xNext, squares, onPlay}:BoardProps) {

  const winner = CalculateWinner(squares);
  let stats;
  if (winner) {
    stats = 'Ganhador: ' + winner;
  } else {
    stats = 'Próximo: ' + (xNext ? 'X' : 'O');
  }

  function HandleClick(i:number) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    const nextSquare = squares.slice();

    if (xNext) {
      nextSquare[i] = 'X';
    } else {
      nextSquare[i] = 'O';
    }
    onPlay(nextSquare);
  }

  return (
    <>
      <div className="status">{stats}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => HandleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => HandleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => HandleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => HandleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => HandleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => HandleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => HandleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => HandleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => HandleClick(8)} />
      </div>
    </>
  );
}
