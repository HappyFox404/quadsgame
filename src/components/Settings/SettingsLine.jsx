import React, { useState } from 'react'

/*
  label: "Игрок 1",
  name: "player1Name",
  type: "text",
  placeHolder: "text",
  value: "Игрок 1"
*/


export default function SettingsLine({ item, changeItem }) {
  
  const [ValueChanged, setValueChanged] = useState(item.value);

  const OnChanged = (e) => {
    e.preventDefault();
    setValueChanged(e.target.value);
    if (changeItem)
      changeItem(item, e.target.value);
  }

  return (
    <div className='SettingsLine'>
      <div className='Label'>{item.label}</div>
      <input className='Line' id={item.name} type={item.type} name={item.name} placeholder={item.placeHolder} value={ValueChanged} onChange={OnChanged} autoComplete="off"/>
    </div>
  )
}
