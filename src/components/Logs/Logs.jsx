import React, { useEffect } from 'react'
import LogItem from './LogItem';

import './Logs.css';

export default function Logs({ items, styles }) {

    useEffect(() => {
        const logs = document.getElementById("logs");
        logs.scrollTop = logs.scrollHeight;
    });

    return (
        <div className='Logs' id='logs' style={styles}>
            <h2 className='Header'>Логи</h2>
            {
                items.map((item, i) => <LogItem key={i.toString()} text={item.text} status={item.status}/>)
            }
        </div>
    )
}
