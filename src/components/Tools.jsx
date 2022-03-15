import React from 'react'
import Rules from './Rules';
import TabBox from './TabBox/TabBox'

export default function Tools() {

    const rulesItem = [
        "Генерация изначальных квадратов",
        "Размещение квадратов противников в противоположных углах",
        "Игроки по очереди генерируют кубы определённых размеров и размещают на игровом поле",
        "Выигрывает тот игрок у кого больше область",
        "Если игрок не может разместить элемент, он пропускает ход",
        "Игра считается оконченной, когда не остается свободных клеток"
    ];

    //Error стоит временно
    const tabsItems = [
        {
            name: "Игра",
            widget : <div className='Error'>Логи игры</div>
        },
        {
            name: "Правила",
            widget : <Rules rules={rulesItem}/>
        }
    ];

    return (
        <div className='Tools Box'>
            <TabBox tabs={tabsItems}/>
        </div>
    )
}
