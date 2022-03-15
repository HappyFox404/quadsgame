import React, { useState } from 'react'
import Logs from '../Logs/Logs';

import './Game.css';
import GameButton from './GameButton';

export default function GameTools({logs, actionNewGame, actionNextPlayer}) {

    return (
      <div className='Game'>
        <Logs items={logs} styles={{flex : '9'}}/>
        <div className='BtnLayer' style={{flex : '1'}}>
          <GameButton action={actionNextPlayer} text='Следующий ход' />
          <GameButton action={actionNewGame} text='Новая игра' />
        </div>
      </div>
    )
}
