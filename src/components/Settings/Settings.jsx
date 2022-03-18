import React from 'react'

import './Settings.css';
import SettingsLine from './SettingsLine';

export default function Settings({ items, changeSetting }) {
  if(items){
    return (
      <div style={{height:"90%", width:"100%"}}>
        {
          items.map((item, i) => <SettingsLine key={item.id} item={item} changeItem={changeSetting}/>)
        }
      </div>
    )
  } else {
    return (
      <div className='Error' style={{flex:"10"}}>Настройки не заданы</div>
    )
  }
}
