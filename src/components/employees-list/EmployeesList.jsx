import React from 'react'
import EmployeesItem from '../employees-list-item/EmployeesItem'
import './employeesList.scss'

export default function EmployeesList() {
  return (
    <>
    <ul className="app-list list-group">
      <EmployeesItem/>
      <EmployeesItem/>
      <EmployeesItem/>
    </ul>
    </>
  )
}
