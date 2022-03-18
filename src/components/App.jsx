import React, { useState } from 'react';

import '../common.css';
import { ChangeObject, GenerateDiceRoll, GenerateLog, GetGameState, ChangeGameState, SetGameState, GameState, DiceRoll, GameStateExsists} from '../utils/util';
import Board from './Game/Board';
import Tools from './Tools';

export default function App() {

  const BoardSize = 32;

  const [BoardQuads, setBoardQuads] = useState([]);
  const [LogItems, setLogItems] = useState([]);
  const [SettingsItems, setSettingsItems] = useState([
    {
      id: 1,
      label: "Имя первого игрока",
      name: "player1Name",
      type: "text",
      placeHolder: "Имя игрока",
      value: "Игрок 1"
    },
    {
      id: 2,
      label: "Имя второго игрока",
      name: "player2Name",
      type: "text",
      placeHolder: "Имя игрока",
      value: "Игрок 2"
    }
  ]);

  if (!GameStateExsists()) { 
    SetGameState(GameState(0));
  }
  
  const ChangeSettings = (item, ValueChanged) => {
    let newSettingsItems = [];

    SettingsItems.forEach(element => {
      if (element.id !== item.id)
        newSettingsItems.push(element);
      else {
        newSettingsItems.push(ChangeObject(item, {value: ValueChanged}));
      }
    });

    setSettingsItems(newSettingsItems);
  };

  //GenerateLog('Ходит игрок: ' + GetNamePlayer(CurrentPlayer),'white')

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
    SetGameState(GameState(1));
    setLogItems([GenerateLog('Начата новая игра', 'white'), GenerateLog('Бросок кубиков: ' + String(DiceRoll(0)) + ' ' + String(DiceRoll(1)), 'white')]);
  };

  const NextPlayer = () => {
    if (GetGameState().currentPlayer === 0)
      return;
    
    if (GetGameState().currentPlayer === 1)
      ChangeGameState({
        currentPlayer: 2,
        diceRoll: GenerateDiceRoll()
      });
    else
      ChangeGameState({
        currentPlayer: 1,
        diceRoll: GenerateDiceRoll()
      });
    
    const addLogs = [GenerateLog('Бросок кубиков: ' + String(DiceRoll(0)) + ' ' + String(DiceRoll(1)), 'white')];

    setLogItems([...LogItems, ...addLogs]);
  };

  return (
    <div className='App'>
      <div style={{flex : "0.25"}}></div>
      <Board items={BoardQuads}/>
      <div style={{flex : "0.25"}}></div>
      <Tools logs={LogItems} settingsItems={SettingsItems} changeSetting={ChangeSettings} actionNewGame={NewGame} actionNextPlayer={NextPlayer}/>
    </div>
  )
}
