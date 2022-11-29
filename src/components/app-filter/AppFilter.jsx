import React, { useState } from "react"
import './appFilter.scss'

export default function AppFilter({setFilter}) {
    const [selectButton,setSelectButton] = useState('all')
    const [buttonsData,setButtonsData] = useState([
        {name:'all', label: 'All employees'},
        {name:'moreThan2000', label: 'More than 2000 £'},
    ])
const changeState=(name)=>{
    setFilter(name)
    setSelectButton(name)
}
    const buttons = buttonsData.map(({name,label,active})=>{
        return(
            <button type="button" onClick={()=>changeState(name)} key={name} className={`${selectButton===name?'btn btn-light':'btn btn-outline-light'}`}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
           {/*  <button className="btn btn-light" type="button">
                All employees
            </button>
            
            <button className="btn btn-outline-light" type="button">
                More than 2000 £
            </button> */}
        </div>
    )
}
