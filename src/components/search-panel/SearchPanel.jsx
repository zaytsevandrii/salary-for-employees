import React, { useState } from "react"
import AppFilter from "../app-filter/AppFilter"
import './searchPanel.scss'

export default function SearchPanel({name,setName,setFilter}) {
    
    return (
        <div className="search-panel">
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control search-input" placeholder="Find an employee" />
            <AppFilter setFilter={setFilter}/>
        </div>
    )
}
