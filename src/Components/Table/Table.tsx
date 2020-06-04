import React, { Dispatch, SetStateAction } from 'react'
import { PersonsType } from '../../redux/persons-reducer'
import './Table.css'
import DeleteTable from './DeleteTable/DeleteTable';


type Props = {
    sortOfId: () => void
    sortOfName: () => void
    sortOfAge: () => void
    colorIsActive: (option: boolean) => any
    isSortedOfId: boolean
    isSortedOfName: boolean
    isSortedOfAge: boolean
    isSorted: boolean
    arr: PersonsType[]
    showModal: boolean
    toggleShow: Dispatch<SetStateAction<boolean>>
    deleteTable: (index: number) => void
    currentDelete: null | number
    deleteModalShow: (index: number) => void
}

const Table: React.FC<Props> = (props) => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th onClick={props.sortOfId} style={props.colorIsActive(props.isSortedOfId)}>Id</th>
                        <th onClick={props.sortOfName} style={props.colorIsActive(props.isSortedOfName)}>Name</th>
                        <th onClick={props.sortOfAge} style={props.colorIsActive(props.isSortedOfAge)}>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {props.showModal && <DeleteTable toggleShow={props.toggleShow} deleteTable={props.deleteTable} currentDelete={props.currentDelete} />}
                    {!props.isSorted ?
                        props.arr.map((p, index) => {
                            return <tr key={p.ID} onClick={() => { props.deleteModalShow(index) }} className={'tableTr'}>
                                <td>{p.ID}</td>
                                <td>{p.Name}</td>
                                <td>{p.Age}</td>
                            </tr>
                        })
                        :
                        <tr>
                            <td></td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table