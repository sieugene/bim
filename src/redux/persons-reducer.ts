

const SET_PERSONS = 'SET_PERSONS'
const UPDATE_VALUES_FORM = 'UPDATE_VALUES_FORM'
const ADD_TABLE = 'ADD_TABLE'
const EDIT_ALL_TABLES = 'EDIT_ALL_TABLES'


export type PersonsType = {
    ID: string
    Name: string
    Age: string
}
export type FormType = {
    ID: undefined | string,
    Name: undefined | string,
    Age: undefined | string
}

let initialState = {
    persons: [] as PersonsType[],
    addingTableForm: {
        ID: undefined,
        Name: undefined,
        Age: undefined,
    } as FormType
}
type InitialStateType = typeof initialState;


const onChangeVal = (state:InitialStateType,action:UpdateOneTabletInAllType) => {
    let copy = [...state.persons]
    copy[action.index] = {
        //@ts-ignore
        ID: action.table.ID,
        //@ts-ignore
        Name: action.table.Name,
        //@ts-ignore
        Age: action.table.Age
    }
    //@ts-ignore
    return copy
}

const personsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case UPDATE_VALUES_FORM:
            return {
                ...state,
                addingTableForm: {
                    ID: action.form.ID,
                    Name: action.form.Name,
                    Age: action.form.Age
                }
            }
        case ADD_TABLE:
            return {
                ...state,
                persons: [...state.persons, action.table]
            }
        case SET_PERSONS:
            return {
                ...state,
                persons: action.persons
            }
        case EDIT_ALL_TABLES:
            return {
                ...state,
                persons: onChangeVal(state,action)
            }
        default:
            return state
    }
}

type ActionsType = SetPersonsType | AddTableType | UpdateValuesFormType | UpdateOneTabletInAllType

type SetPersonsType = {
    type: typeof SET_PERSONS,
    persons: PersonsType[]
}

export const setPersonsAC = (persons: PersonsType[]): SetPersonsType => {
    return {
        type: SET_PERSONS,
        persons
    }
}

type AddTableType = {
    type: typeof ADD_TABLE,
    table: PersonsType
}

export const addTableAC = (table: PersonsType): AddTableType => {
    return {
        type: ADD_TABLE,
        table
    }
}

type UpdateValuesFormType = {
    type: typeof UPDATE_VALUES_FORM,
    form: FormType
}

export const updateValuesFormAC = (ID: string, Name: string, Age: string): UpdateValuesFormType => {
    return {
        type: UPDATE_VALUES_FORM,
        form: {
            ID,
            Name,
            Age
        }
    }
}



type UpdateOneTabletInAllType = {
    type: typeof EDIT_ALL_TABLES,
    table: PersonsType,
    index: number
}

export const updateOneTabletInAllAC = (table: PersonsType, index: number): UpdateOneTabletInAllType => {
    return {
        type: EDIT_ALL_TABLES,
        table,
        index
    }
}


export default personsReducer
