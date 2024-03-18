import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import './index.css';
import React from 'react';
import DetailPage from './pages/users/DetailPage';
import Home from './pages/users/Home';
import Paslon from './pages/users/Paslon';
import DashBord from './pages/Admin/DashBord';
import Login from './pages/users/login';
import Register from './pages/users/Register';
import ModalVote from './pages/users/ModalVote';
import ListPartai from './pages/Admin/ListPartai';
import ListPaslon from './pages/Admin/ListPaslon';
import AddPartaiCom from './pages/Admin/AddPartaiCom';
import AddPaslon from './pages/Admin/AddPaslon';
import UpdatePartai from './pages/Admin/UpdatePartai';
import UpdatePaslon from './pages/Admin/updatePaslon';


const App: React.FC = () => {
  const findUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/user");
  
     console.log(await response.json())
    } catch (error) {
      console.error( error);
    }
  };
  
  React.useEffect(() => {
    findUsers()
   }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/paslon" element={<Paslon />} />
          <Route path="/dashboard" element={<DashBord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/modalvote" element={<ModalVote />} />
          <Route path="/listpartai" element={<ListPartai />} />
          <Route path="/listpaslon" element={<ListPaslon />} />
          <Route path="/addpartai" element={<AddPartaiCom />} />
          <Route path="/addpaslon" element={<AddPaslon />} />
          <Route path="/updatepartai/:id" element={<UpdatePartai />} />
          <Route path='updatepaslon/:id' element={<UpdatePaslon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
