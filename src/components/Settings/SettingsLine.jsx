import React from 'react'

/*
  label: "Игрок 1",
  name: "player1Name",
  type: "text"
*/


export default function SettingsLine({item}) {
  return (
    <div>Label: {item.label}, Name: {item.name}</div>
  )
}
