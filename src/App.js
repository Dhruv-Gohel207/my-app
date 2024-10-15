import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './component/About';

function App() {
  const [myMode, setMyMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')



  }
  const togglMode = (cls) => {
    removeBodyClasses();      
    document.body.classList.add('bg-'+cls)
    if (myMode === "light") {
      setMyMode("dark");
      document.body.style.backgroundColor = "#231e36";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMyMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="WebDemo1" myMode={myMode} togglMode={togglMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Textform heading="Enter the text here to analyze below" showAlert={showAlert} />} />
          <Route path="/about" element={<About myMode={myMode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
