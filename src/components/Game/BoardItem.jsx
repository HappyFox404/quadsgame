import React from 'react'
import { DiceRoll, GetPlayerColor } from '../../utils/util';

export default function BoardItem({ idLine, idElement, selectBoardItem, selectAction}) {
    const id_element = idElement;
    const id_line = idLine;

    const MouseHover = (e) => {
        e.preventDefault();

        let elements = [];

        for (let i = 0; i < DiceRoll(0); i++) { 
            for (let j = 0; j < DiceRoll(1); j++) { 
                elements.push({ i: i+id_line, j: j+id_element });
            }
        }

        if (selectAction)
            selectAction(elements);
    };

    const MouseLeave = (e) => { 
        e.preventDefault();

        if (selectAction)
            selectAction([]);
    };

    const ColorItem = () => {
        if (selectBoardItem.find(item => item.i === id_line && item.j === id_element) !== undefined) {
            return GetPlayerColor();
        } else { 
            return 'transparent';
        }
    }

    return (
        <div onMouseEnter={MouseHover} onMouseLeave={MouseLeave} className='BoardItem' style={{backgroundColor:ColorItem()}}></div>
    )
}
