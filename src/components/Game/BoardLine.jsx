import React from 'react'
import BoardItem from './BoardItem'

export default function BoardLine({ items, idLine, selectBoardItem, selectAction}) {
    const id_line = idLine;
    return (
        <div className='BoardLine'>
            {
                items.map((item, i) => <BoardItem key={i.toString()} idLine={id_line} idElement={i} selectBoardItem={selectBoardItem} selectAction={selectAction}/>)
            }
        </div>
    )
}
