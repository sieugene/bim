import React, { useState, useEffect } from 'react'
import { PersonsType } from '../../redux/persons-reducer'
import { Sorting } from './../Helper/Helper';
import './Table.css'
import Table from './Table';

type Props = {
    persons: PersonsType[]
}

const TableContainer: React.FC<Props> = (props) => {
    const [arr, setArray] = useState([] as PersonsType[])
    const [currentDelete, setCurrentForDelete] = useState(null as null | number);
    const [showModal, toggleShow] = useState(false)
    const [isSorted, toggleSortActive] = useState(false)
    const [isSortedOfId, toggleForId] = useState(false)
    const [isSortedOfAge, toggleForAge] = useState(false)
    const [isSortedOfName, toggleForName] = useState(false)

    useEffect(() => {
        setArray(props.persons)
    }, [props.persons])

    const colorIsActive = (option: boolean) => {
        if (option) {
            return {
                color: 'red'
            }
        }
    }

    const sortOfId = async () => {
        let copyarray = arr;
        let options = {
            isSortedOfId,
            toggleForId
        }
        Sorting('id', copyarray, setArray, toggleSortActive, options)
    }
    const sortOfAge = async () => {

        let copyarray = arr;
        let options = {
            isSortedOfAge,
            toggleForAge
        }
        Sorting('age', copyarray, setArray, toggleSortActive, options)
    }
    const sortOfName = async () => {

        let copyarray = arr;
        let options = {
            isSortedOfName,
            toggleForName
        }
        Sorting('name', copyarray, setArray, toggleSortActive, options)

    }

    const deleteTable = (index: number) => {
        var array = [...arr];
        array.splice(index, 1);
        setArray(array);
    }
    const deleteModalShow = (index: number) => {
        toggleShow(true)
        setCurrentForDelete(index)
    }

    return (
        <Table
            deleteModalShow={deleteModalShow}
            isSorted={isSorted}
            deleteTable={deleteTable}
            sortOfName={sortOfName}
            sortOfAge={sortOfAge}
            sortOfId={sortOfId}
            colorIsActive={colorIsActive}
            isSortedOfId={isSortedOfId}
            isSortedOfName={isSortedOfName}
            isSortedOfAge={isSortedOfAge}
            showModal={showModal}
            toggleShow={toggleShow}
            currentDelete={currentDelete}
            arr={arr}
        />
    )
}

export default TableContainer