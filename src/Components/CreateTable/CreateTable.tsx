import React from 'react'
import { PersonsType, FormType } from '../../redux/persons-reducer'
import './CreateTable.css'

type Props = {
    addTableAC: (table: PersonsType) => void
    form: FormType
    addingActive: () => void
    addingMode: boolean
    updateValuesFormAC: (ID: string, Name: string, Age: string) => any
    onChangeForm: (e: any) => void
    createTable: () => void
}

const CreateTable: React.FC<Props> = (props) => {
  
    return (
        <div>
            {!props.addingMode ?
                <button onClick={() => { props.addingActive() }}>Новая таблица</button>
                :
                <div className='addingTable'>
                    <form onChange={props.onChangeForm} onSubmit={(e) => { e.preventDefault() }}>
                        <input value={props.form.ID} name="id" required type="number" />
                        <input value={props.form.Name} name="name" required />
                        <input value={props.form.Age} name="age" required type="number" />
                        <div className="buttons">
                            <button onClick={() => { props.createTable() }} className='confirm'>Создать</button>
                            <button onClick={() => { props.addingActive() }} className='cancel'>Отмена</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default CreateTable