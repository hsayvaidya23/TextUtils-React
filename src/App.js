import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm"
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch, // Switch is updated to Routes
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";

      // FOR TITLE FLASHING  
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing.";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now";
      // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode= {toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
        {/* WHY WE USE "exact"in path cuz----
        /users ---> component 1
        /users/home ---> component 2
        without exact  it  will always use first  component1 */}
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below"
                mode={mode} 
                previewText="Enter something in the textbox above to preview it here"
                showAlert={showAlert} />} />
        </Routes>
        </div>
        </Router>
    </> 
  );
}

export default App;
