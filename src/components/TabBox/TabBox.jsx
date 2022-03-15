import React, { useState } from 'react'

import './TabBox.css';
import TabItem from './TabItem';

export default function TabBox({tabs}) {

    const [CurrentItem, setCurrentItem] = useState(0);

    const SelectItem = (i) => {
        setCurrentItem(i);
    };

    if(tabs){
        return (
            <div className='TabBox'>
                <div className='Tabs'>
                    {
                        tabs.map((elem, i) => <TabItem key={i} tabName={elem.name} idx={i} isSelect={(CurrentItem === i)} action={SelectItem}/>)
                    }
                </div>
                <div className='Box'>
                    {
                        tabs.map((elem, i) => (CurrentItem === i) && elem.widget)
                    }
                </div>
            </div>
        )
    } else {
        return (<div className='TabBox'><div className='Error'>Элементы не найдены</div></div>)
    }
}
