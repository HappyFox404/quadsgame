import React from 'react'

export default function GameButton({ text, action, styles }) {
    return (
        <div className='GameButton' style={styles} onClick={(e) => { e.preventDefault(); if(action)action(); }}>{text}</div>
    )
}

GameButton.defaultProps = { text: 'Кнопка' };