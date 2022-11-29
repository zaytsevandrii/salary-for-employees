import React from 'react'
import EmployeesItem from '../employees-list-item/EmployeesItem'
import './employeesList.scss'

export default function EmployeesList({data,deletePerson,checkIncrease,name}) {
 /*  const findAward =()=>{
    setData(data.filter(person=>person.name.includes(name)))
  } */
  return (
    <>
    <ul className="app-list list-group">
      {data.filter(person=>person.name.toLowerCase().includes(name.toLowerCase())).map(person=><EmployeesItem key={person.id} {...person} deletePerson={deletePerson} checkIncrease={checkIncrease}/>)}
    </ul>
    </>
  )
}
