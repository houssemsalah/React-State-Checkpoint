import React from 'react';  
import './App.css';  
import Toggle from "./Toggle";  
import Person from "./Person";  




function App(){
  return (  
    <div className="App">  
      <Toggle title="Show Person">  
                <Person name="Houssem Salah" age="26" pro="bjbbdhhdjksbvs" img="./houssem.jpg"/>  
            </Toggle>  
     
    </div>  
  );  
}  

export default App;  
