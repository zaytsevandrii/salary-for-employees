import React from "react"
import './employessListItem.scss'

export default function EmployeesItem({name,salary,increase,id,deletePerson,checkIncrease}) {
    return (
        <>
            <li className={`list-group-item ${increase&&'increase'} d-flex justify-content-between`}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" defaultValue={salary+'£'} className="list-group-item-input" />
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-cookie btn-sm" onClick={()=>checkIncrease(id)}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button className="btn-trash btn-sm" onClick={()=>deletePerson(id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        </>
    )
}
