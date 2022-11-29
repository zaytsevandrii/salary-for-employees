import React from "react"
import './appFilter.scss'

export default function AppFilter() {
    return (
        <div className="btn-group">
            <button className="btn btn-light" type="button">
                All employees
            </button>
            <button className="btn btn-outline-light" type="button">
                To higher salary
            </button>
            <button className="btn btn-outline-light" type="button">
                More than 2000 £
            </button>
        </div>
    )
}
