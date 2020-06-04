import React, { useEffect, useState } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import { AppStateType } from './redux/store';
import { setPersonsAC } from './redux/persons-reducer';
import PersonJson from './assets/json/small_data_persons.json'
import { PersonsType } from './redux/persons-reducer'
import TableContainer from './Components/Table/TableContainer';
import CreateTableContainer from './Components/CreateTable/CreateTableContainer';
import EditTablesContainer from './Components/EditTables/EditTablesContainer';

type Props = {
  persons: PersonsType[]
  setPersonsAC: (persons: PersonsType[]) => void
}

const App: React.FC<Props> = (props) => {
  const [editTables, toggleEditTables] = useState(false)
  useEffect(() => {
    props.setPersonsAC(PersonJson)
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <div className="container">
        {!editTables && <CreateTableContainer />}
        {props.persons.length >= 1 &&
          <EditTablesContainer
            toggleEditTables={toggleEditTables}
            setPersonsAC={setPersonsAC}
            editTables={editTables}
          />
        }
        {!editTables &&
          <TableContainer persons={props.persons} />
        }
      </div>
    </div>
  );
}

let mapStateToProps = (state: AppStateType) => {
  return {
    persons: state.persons.persons
  }
}



export default connect(mapStateToProps, {
  setPersonsAC
})(App);
