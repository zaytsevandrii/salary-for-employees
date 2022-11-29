import React from "react"
import AppFilter from "../app-filter/AppFilter"
import './searchPanel.scss'

export default function SearchPanel() {
    return (
        <div className="search-panel">
            <input type="text" className="form-control search-input" placeholder="Find an employee" />
            <AppFilter/>
        </div>
    )
}
