import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(massage , type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    }
    , 2000)
  }
 const toggleMode=()=>{
  
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor="#042743"
    showAlert("Dark mode has been Enabled" , "success");
    
  }
  
  else{
    setMode('light')
    document.body.style.backgroundColor="white"
    showAlert("Light mode has been Enabled" , "success")
  }
  
 }
  return (
  
   <>
   
   {/* < Navbar title="MyWeb" about="About Us" mode={mode} /> */}
   < Navbar title="MyWeb" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   
    <div className='container'>
    <TextForm showAlert={showAlert} heading="Enter the text analyze" mode={mode}/>
    </div>
     < About mode={mode}/>
{/* <Router>
< Navbar title="MyWeb" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   
<Switch>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <div className='container'>
    <TextForm showAlert={showAlert} heading="Enter the text analyze" mode={mode}/>
    </div>
          </Route>
        </Switch>
</Router> */}

     
  </>
   
  );
}

export default App;
