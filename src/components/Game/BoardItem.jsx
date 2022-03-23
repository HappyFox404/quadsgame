import React from 'react'
import { DiceRoll, GetPlayerColor, GetPlayerColorValue, MaxBoard, SelectItem } from '../../utils/util';

export default function BoardItem({item, idLine, idElement, selectBoardItem, selectAction, choiceItems}) {
    const id_element = idElement;
    const id_line = idLine;
    const item_value = item;

    const MouseHover = (e) => {
        e.preventDefault();

        let elements = CheckElements();

        if (selectAction)
            selectAction(elements);
    };

    const MouseClick = (e) => {
        e.preventDefault();

        if (choiceItems)
            choiceItems(CheckElements());
    };

    const CheckElements = () => { 
        let elements = [];

        for (let i = 0; i < DiceRoll(0); i++) { 
            for (let j = 0; j < DiceRoll(1); j++) { 
                if (id_element + DiceRoll(1) > MaxBoard() || id_line + DiceRoll(0) > MaxBoard())
                    elements.push(SelectItem(true, i + id_line, j + id_element, item_value));
                else
                    elements.push(SelectItem(false, i + id_line, j + id_element, item_value));
            }
        }

        return elements;
    };

    const MouseLeave = (e) => { 
        e.preventDefault();

        if (selectAction)
            selectAction([]);
    };

    const ColorItem = () => {
        if (selectBoardItem.find(item => item.i === id_line && item.j === id_element) !== undefined) {
            if (selectBoardItem.find(item => item.i === id_line && item.j === id_element && item.err === true) !== undefined) {
                return 'red';
            } else {
                return GetPlayerColor();
            }
        } else {
            if (item_value === 0) {
                return 'transparent';
            } else { 
                return GetPlayerColorValue(item_value);
            }
        }
    }

    return (
        <div onMouseEnter={MouseHover} onMouseLeave={MouseLeave} onClick={MouseClick} className='BoardItem' style={{backgroundColor:ColorItem()}}></div>
    )
}
