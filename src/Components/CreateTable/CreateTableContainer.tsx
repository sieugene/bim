import React, { useState } from 'react'
import CreateTable from './CreateTable'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { addTableAC, PersonsType, updateValuesFormAC, FormType } from './../../redux/persons-reducer';
import {Validate} from './../Helper/Helper'

type Props = {
    addTableAC: (table: PersonsType) => void
    form: FormType
    updateValuesFormAC: (ID: string, Name: string, Age: string) => any
}

const CreateTableContainer: React.FC<Props> = (props) => {
    const [addingMode, switchMode] = useState(false)
    const addingActive = () => { switchMode(!addingMode) }

    const onChangeForm = (e: any) => {
        props.updateValuesFormAC(e.target.form[0].value, e.target.form[1].value, e.target.form[2].value)
    }
    const createTable = async () => {
        if(Validate(props.form.ID,props.form.Name,props.form.Age)){

        }
        else {
            //@ts-ignore
            await props.addTableAC(props.form);
            props.updateValuesFormAC('', '', '')
            addingActive()
        }
    }
    return (
        <CreateTable addTableAC={props.addTableAC}
            addingActive={addingActive}
            addingMode={addingMode}
            form={props.form}
            updateValuesFormAC={props.updateValuesFormAC}
            createTable={createTable}
            onChangeForm={onChangeForm}

        />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        form: state.persons.addingTableForm
    }
}

export default connect(mapStateToProps, {
    addTableAC,
    updateValuesFormAC
})(CreateTableContainer)