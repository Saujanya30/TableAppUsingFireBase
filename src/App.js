import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AddEdit from './Pages/AddEdit';
import View from './Pages/View';
import About from './Pages/About';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer position='top-center'/>
        <Routes>
          {/* Adding Paths of Pages */}
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Add" element={<AddEdit/>}/>
          <Route path="/update/:id" element={<AddEdit/>}/>
          <Route path="/view/:id" element={<View/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
