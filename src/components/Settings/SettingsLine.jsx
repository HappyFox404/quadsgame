import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'

/*
  label: "Игрок 1",
  name: "player1Name",
  type: "text",
  placeHolder: "text",
  value: "Игрок 1"
*/


export default function SettingsLine({ item }) {
  
  const [ValueChanged,setValueChanged] = useState(item.value)

  return (
    <div className='SettingsLine'>
      <div className='Label'>{item.label}</div>
      <input className='Line' type={item.type} name={item.name} placeholder={item.placeHolder} value={ValueChanged} onChange={(e) => { e.preventDefault(); setValueChanged(e.target.value) }} autoComplete="off"/>
    </div>
  )
}
