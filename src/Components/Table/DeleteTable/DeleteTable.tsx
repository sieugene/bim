import React from 'react'
import './DeleteTable.css'

const DeleteTable = (props: any) => {
    const pressDelete = async() => {
        await props.deleteTable(props.currentDelete)
        props.toggleShow(false);
    }
    return (
        <div className='deleteModal'>
            <div className="title">
                Удалить эту таблицу?
            </div>
            <div className="wrap">
                <button className='confirm' onClick={pressDelete}>Удалить</button>
                <button className='cancel' onClick={() => {props.toggleShow(false)}}>Отмена</button>
            </div>
        </div>
    )
}

export default DeleteTable