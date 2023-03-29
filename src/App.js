import './App.css';
import AddExpense from './Components/AddExpense';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AddExpense' element={<AddExpense/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
      {/* <Navbar title="Splitter"/>
      <Dashboard/>
      <AddExpense/> */}
    </>
  );
}

export default App;
