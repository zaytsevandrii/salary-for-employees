import React, { useRef, useState } from "react"
import "./employeesAddForm.scss"

export default function EmployeesAdd({ addEmployee }) {
    const [name, setText] = useState("")
    const inputRef = useRef()
    const [salary, setSalary] = useState("")
    const formSubmit = (e) => {
        e.preventDefault()
        if (!name||!salary) {
            alert("Please add the name and salary")
        } else {
            addEmployee({ name, salary })
            setText("")
            setSalary("")
            inputRef.current.focus()
        }
    }
    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form className="add-form d-flex" onSubmit={formSubmit}>
                <input ref={inputRef}
                    type="text"
                    value={name}
                    onChange={(e) => setText(e.target.value)}
                    className="form-control new-post-label"
                    placeholder="What's the name"
                />
                <input
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="form-control new-post-label"
                    placeholder="Salary"
                />

                <button className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}
