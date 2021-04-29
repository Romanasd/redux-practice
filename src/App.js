import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './App.css';

import map from 'lodash/map';

import {setFoo, fetchStudentRequested} from './core/state/students/actions';

function App({...props}) {
  useEffect(() => {
    props.requestStudents();
  }, [props]);
  
  console.log(props)
  return (
    <div className="App">
      <input 
        label="Hola"
        value={props.foo}
        name="foo"
        onChange = {({ target: {value, name} }) => props.setPropFoo({[name]:value})}
      />
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {map(props.students, student =>(
              <tr>
                <td>
                  {student.name}
                </td>
                <td>
                  {student.surname}
                </td>
                <td>
                  {student.email}
                </td>
                <td>
                  {student.gender}
                </td>
                <td>
                </td>
              </tr>))
            }
          </tbody>
        </table>
    </div>
  );
}
const mapStateToProps = (state) => ({
  foo: state.student.foo,
  students: state.student.documents
})
const mapDispatchToProps = (dispatch) => ({
  setPropFoo: foo => dispatch(setFoo(foo.foo)),
  requestStudents: () => dispatch(fetchStudentRequested({}))
})
export default connect(mapStateToProps,mapDispatchToProps)
(App);
