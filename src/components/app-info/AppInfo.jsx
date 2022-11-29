import React from 'react'
import './apinfo.scss'

export default function AppInfo({data}) {
  return (
    <div className='app_info'>
        <h1>Best Accounting Software with Employees</h1>
        <h2>{`Total number of employees: ${data.length>=1?data.length:''}`}</h2>
        <h2>12 individuals will receive the award.</h2>
    </div>
  )
}
