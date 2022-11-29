import React from 'react'
import './employeesAddForm.scss'

export default function EmployeesAdd() {
  return (
    <div className='app-add-form'>
        <h3>Add a new employee</h3>
        <form className='add-form d-flex'>
            <input type="text" className="form-control new-post-label" placeholder="What's the name "/>
            <input type="text" className="form-control new-post-label" placeholder="Salary"/>

            <button className="btn btn-outline-light">Add</button>
        </form>
    </div>
  )
}
