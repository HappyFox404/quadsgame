import React from 'react'
import { DiceRoll, GetPlayerColor, MaxBoard } from '../../utils/util';

export default function BoardItem({ idLine, idElement, selectBoardItem, selectAction}) {
    const id_element = idElement;
    const id_line = idLine;

    const MouseHover = (e) => {
        e.preventDefault();

        let elements = [];

        for (let i = 0; i < DiceRoll(0); i++) { 
            for (let j = 0; j < DiceRoll(1); j++) { 
                if (id_element + DiceRoll(1) > MaxBoard() || id_line + DiceRoll(0) > MaxBoard())
                    elements.push({err: true, i: i+id_line, j: j+id_element });
                else
                    elements.push({err: false, i: i+id_line, j: j+id_element });
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
            if (selectBoardItem.find(item => item.i === id_line && item.j === id_element && item.err === true) !== undefined) {
                console.log(selectBoardItem);
                return 'red';
            } else {
                return GetPlayerColor();
            }
        } else { 
            return 'transparent';
        }
    }

    return (
        <div onMouseEnter={MouseHover} onMouseLeave={MouseLeave} className='BoardItem' style={{backgroundColor:ColorItem()}}></div>
    )
}
