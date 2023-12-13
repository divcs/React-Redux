import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as toDoAction from './actions/toDoAction'

const App = (props) => {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let todo = {
      name: name,
    }
    setName('')
    props.createToDo(todo)
  }

  const listView = (data, index) => {
    return (
      <div className='row' key={index}>
        <div className='col-md-10'>
          <li className='list-group-item clearfix'>{data.name}</li>
        </div>
        <div className='col-md-2'>
          <button
            onClick={(e) => deleteToDo(e, index)}
            className='btn btn-danger'
          >
            Remove
          </button>
        </div>
      </div>
    )
  }

  const deleteToDo = (e, index) => {
    e.preventDefault()
    props.deleteToDo(index)
  }

  return (
    <div>
      <h1>Simple To-Do Application</h1>
      <hr />
      <div>
        <h3>Add Task </h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleChange}
            className='form-control'
            value={name}
          />
          <br />
          <input type='submit' className='btn btn-success' value='ADD' />
        </form>
        <hr />
        <ul className='list-group'>
          {props.todo.map((todo, i) => listView(todo, i))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createToDo: (todo) => dispatch(toDoAction.createToDo(todo)),
    deleteToDo: (index) => dispatch(toDoAction.deleteToDo(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
