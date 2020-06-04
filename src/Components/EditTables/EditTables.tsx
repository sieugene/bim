import React from 'react'
import { TrackChangeValue } from '../Helper/Helper'
import { PersonsType } from '../../redux/persons-reducer'

type Props = {
    save: () => void
    copyArr: PersonsType[]
    onChangeVal: (e: any, index: number) => void
}

const EditTables: React.FC<Props> = (props) => {
    return (
        <>
            <button onClick={() => { props.save() }}>Сохранить</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.copyArr.map((p: any, index: any) => {
                            return <tr key={p.ID} onChange={(e) => { props.onChangeVal(e, index) }}>
                                <td><input type="number" id="id" onChange={(e) => { TrackChangeValue(e, p.ID) }} placeholder={p.ID}
                                /></td>
                                <td><input onChange={(e) => { TrackChangeValue(e, p.Name) }} id="name" placeholder={p.Name}
                                /></td>
                                <td><input type="number" id="age" placeholder={p.Age} onChange={(e) => { TrackChangeValue(e, p.Age) }}
                                /></td>
                            </tr>
                        })
                    })
                    }
                </tbody>
            </table>
        </>
    )
}

export default EditTables