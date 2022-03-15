import React from 'react'
import BoardItem from './BoardItem'

export default function BoardLine({items}) {
    return (
        <div className='BoardLine'>
            {
                items.map((item, i) => <BoardItem key={i.toString()}/>)
            }
        </div>
    )
}
