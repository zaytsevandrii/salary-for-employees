import './App.scss';
import AppFilter from './components/app-filter/AppFilter';
import AppInfo from './components/app-info/AppInfo';
import EmployeesAdd from './components/employees-add-form/EmployeesAdd';
import EmployeesList from './components/employees-list/EmployeesList';
import SearchPanel from './components/search-panel/SearchPanel';

function App() {
  return (
    <div className="App">
      <AppInfo/>
      <SearchPanel/>
      <EmployeesList/>
      <EmployeesAdd/>
    </div>
  );
}

export default App;
