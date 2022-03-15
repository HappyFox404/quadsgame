import React, { useEffect, useState } from 'react';

import '../common.css';
import Board from './Game/Board';
import Tools from './Tools';

export default function App() {

  const BoardSize = 32;

  const [BoardQuads, setBoardQuads] = useState([]);
  const [LogItems, setLogItems] = useState([]);
  let DiceRoll = [];

  function RandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function GenerateDiceRoll() { 
    DiceRoll = [RandomRange(1, 6), RandomRange(1, 6)];
  };

  function GenerateLog(txt, st) { 
    return { text: txt, status: st };
  };

  const NewGame = () => {
    let pole = [];
    for (let i = 0; i < BoardSize; i++) {
      let line = [];
      for (let j = 0; j < BoardSize; j++) {
        line.push(0);
      }
      pole.push(line);
    }
    setBoardQuads(pole);
    GenerateDiceRoll();
    setLogItems([GenerateLog('Начата новая игра', 'white'), GenerateLog('Бросок кубиков: ' + String(DiceRoll[0]) + ' ' + String(DiceRoll[1]), 'white')]);
  };

  const NextPlayer = () => { 
    GenerateDiceRoll();
    setLogItems([...LogItems, GenerateLog('Бросок кубиков: ' + String(DiceRoll[0]) + ' ' + String(DiceRoll[1]), 'white')]);
  };

  return (
    <div className='App'>
      <Board items={BoardQuads}/>
      <Tools logs={LogItems} actionNewGame={NewGame} actionNextPlayer={NextPlayer}/>
    </div>
  )
}
