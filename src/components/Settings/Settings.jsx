import React from 'react'

import './SettingsLine';
import SettingsLine from './SettingsLine';

export default function Settings({items}) {
  if(items){
    return (
      <div style={{height:"90%", width:"100%"}}>
        {
          items.map((item) => <SettingsLine item={item}/>)
        }
      </div>
    )
  } else {
    return (
      <div className='Error' style={{flex:"10"}}>Настройки не заданы</div>
    )
  }
}
