import React from 'react'

import './Board.css';
import BoardLine from './BoardLine';

export default function Board({ items }) {
  if (items.length > 0) {
    return (
      <div className='Board Box'>
        {
          items.map((item, i) => <BoardLine key={i.toString()} items={item} />)
        }
      </div>
    )
  } else { 
    return (
      <div className='Board Box'><div className='Error'>Начните новую игру</div></div>
    )
  }
}
