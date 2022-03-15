import React from 'react'

import './TabBox.css';

export default function TabItem({tabName, isSelect, idx, action}) {
    return (
        <div key={idx} className={'Item ' + ((isSelect) ? 'ItemSelect' : 'ItemDefault')} onClick={() => {action(idx)}}>{tabName}</div>
    )
}

TabItem.defaultProps = {isSelect : false, tabName : 'Вкладка'};
