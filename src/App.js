import { useEffect, useState } from 'react';
import './App.scss';
import AppInfo from './components/app-info/AppInfo';
import EmployeesAdd from './components/employees-add-form/EmployeesAdd';
import EmployeesList from './components/employees-list/EmployeesList';
import SearchPanel from './components/search-panel/SearchPanel';

function App() {
  const [name,setName] = useState('')
  const [filter,setFilter] = useState('')
  const [data,setData] = useState(()=>{

  
    const savedData = localStorage.getItem('employees')
    if(savedData){
      return JSON.parse(savedData)
    }else{
      return [{id:1,name:'John Smith',salary:1700,increase:false},
      {id:2,name:'Alex Murthy',salary:1850,increase:false},
      {id:3,name:'Andrii Zaitsev',salary:2100,increase:false},]
    }
 /*    [
    
  ] */
})   

  useEffect(()=>{
    localStorage.setItem('employees', JSON.stringify(data))
  },[data])
  const deletePerson=(id)=>{
    setData(data.filter(person=>person.id !== id))
  }
  const checkIncrease=(id)=>{
    setData(data.map(person=>person.id===id?{...person,increase:!person.increase}:person))
  }

  const addEmployee=(props)=>{
    const id=Math.floor(Math.random()*50000)
    const newPerson = {...props,id}
    setData([...data,newPerson])
  }

  const filterPost=(items,filter)=>{
    switch(filter){
      case 'moreThan2000':
        return items.filter(item=>item.salary>2000)
      default:
        return items
    }
  }
 const visibleData=filterPost(data,filter)
  return (
    <div className="App">
      <AppInfo data={data} />
      <SearchPanel name={name} setName={setName} setFilter={setFilter}/>
      <EmployeesList name={name} data={visibleData} deletePerson={deletePerson} checkIncrease={checkIncrease}/>
      <EmployeesAdd addEmployee={addEmployee}/>
    </div>
  );
}

export default App;
