import React from 'react'
import BoardItem from './BoardItem'

export default function BoardLine({ items, idLine, selectBoardItem, selectAction,choiceItems}) {
    const id_line = idLine;
    return (
        <div className='BoardLine'>
            {
                items.map((item, i) => <BoardItem key={i.toString()} item={item} idLine={id_line} idElement={i} selectBoardItem={selectBoardItem} selectAction={selectAction} choiceItems={choiceItems}/>)
            }
        </div>
    )
}
