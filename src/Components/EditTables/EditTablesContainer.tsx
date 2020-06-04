import React, { useState } from 'react'
import { connect } from 'react-redux'
import EditTables from './EditTables';
import { PersonsType, updateOneTabletInAllAC } from '../../redux/persons-reducer';
import { AppStateType } from '../../redux/store';
import { checkOnUndefined } from '../Helper/Helper';


type Props = {
    arr: PersonsType[]
    toggleEditTables: (opt: boolean) => void
    setPersonsAC: (persons: PersonsType[]) => void
    editTables: boolean
    updateOneTabletInAllAC: (table: PersonsType, index: number) => void
}

const EditTablesContainer: React.FC<Props> = (props) => {
    const [copyArr, setArr] = useState(props.arr)
    const [canSave, toggleCan] = useState(true);


    const save = async () => {
        if (canSave) {
            await props.setPersonsAC(copyArr);
            props.toggleEditTables(false)
            setArr(props.arr)
        } else {
            alert('Не все поля заполнены!')
        }
    }

    const onChangeVal = (e: any, index: number) => {
        let table = {
            ID: e.currentTarget.children[0].children[0].value,
            //@ts-ignore
            Name: e.currentTarget.children[1].children[0].value,
            //@ts-ignore
            Age: e.currentTarget.children[2].children[0].value
        }
        if (checkOnUndefined(e)) {
            toggleCan(false)
        } else {
            toggleCan(true)
            props.updateOneTabletInAllAC(table, index)
        }
    }
    return (
        <>
            <button onClick={() => { props.toggleEditTables(true) }}>
                Редактировать
            </button>
            {props.editTables &&
                <EditTables
                    save={save}
                    copyArr={copyArr}
                    onChangeVal={onChangeVal}
                />
            }
        </>
    )
}
let mapStateToProps = (state: AppStateType) => {
    return {
        arr: state.persons.persons
    }
}


export default connect(mapStateToProps, {
    updateOneTabletInAllAC
})(EditTablesContainer)