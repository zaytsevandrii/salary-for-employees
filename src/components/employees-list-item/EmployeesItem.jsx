import React from "react"
import './employessListItem.scss'

export default function EmployeesItem() {
    return (
        <>
            <li className="list-group-item d-flex justify-content-between">
                <span className="list-group-item-label">John Smith</span>
                <input type="text" defaultValue="1600£" className="list-group-item-input" />
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        </>
    )
}
