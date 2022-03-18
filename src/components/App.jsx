import React, { useState } from 'react';

import '../common.css';
import { ChangeObject, GenerateDiceRoll, GenerateLog, ChangeGameState, SetGameState, GameState, DiceRoll, GameStateExsists, GetNamePlayer, GetPlayer, GetPlayerColor, MaxBoard} from '../utils/util';
import Board from './Game/Board';
import Tools from './Tools';

export default function App() {
  const [BoardQuads, setBoardQuads] = useState([]);
  const [SelectBoardItem, setSelectBoardItem] = useState([]);
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

  const NewGame = () => {
    let pole = [];
    for (let i = 0; i < MaxBoard(); i++) {
      let line = [];
      for (let j = 0; j < MaxBoard(); j++) {
        line.push(0);
      }
      pole.push(line);
    }

    setBoardQuads(pole);
    setSelectBoardItem([]);
    SetGameState(GameState(1));
    setLogItems([
      GenerateLog('Начата новая игра', 'gold'),
      GenerateLog('Ходит игрок: ' + GetNamePlayer(SettingsItems, GetPlayer()), GetPlayerColor()),
      GenerateLog('Бросок кубиков: ' + String(DiceRoll(0)) + ' ' + String(DiceRoll(1)), GetPlayerColor())
    ]);
  };

  const NextPlayer = () => {
    if (GetPlayer() === 0)
      return;
    
    if (GetPlayer() === 1)
      ChangeGameState({
        currentPlayer: 2,
        diceRoll: GenerateDiceRoll()
      });
    else
      ChangeGameState({
        currentPlayer: 1,
        diceRoll: GenerateDiceRoll()
      });
    
    const addLogs = [
      GenerateLog('Ходит игрок: ' + GetNamePlayer(SettingsItems, GetPlayer()), GetPlayerColor()),
      GenerateLog('Бросок кубиков: ' + String(DiceRoll(0)) + ' ' + String(DiceRoll(1)), GetPlayerColor())
    ];

    setLogItems([...LogItems, ...addLogs]);
  };

  const SetSelectItem = (items) => {
    setSelectBoardItem(items);
  }

  return (
    <div className='App'>
      <div style={{flex : "0.25"}}></div>
      <Board items={BoardQuads} selectBoardItem={SelectBoardItem} selectAction={SetSelectItem}/>
      <div style={{flex : "0.25"}}></div>
      <Tools logs={LogItems} settingsItems={SettingsItems} changeSetting={ChangeSettings} actionNewGame={NewGame} actionNextPlayer={NextPlayer}/>
    </div>
  )
}
