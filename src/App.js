import React, {useState} from 'react';
import useLoader from "./useLoader";
import logo from './logolgm.jpeg';
import './App.css';

function App(){

  const [pics, setUsers]= useState([]);

  const [loader, showloader,hideloader] = useLoader();

  const loadData =() =>{
    showloader(true);
    setTimeout(() =>{ loadUsers();},1000);
  }

  const loadUsers= async()=>{
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    showloader(true);
    setUsers(jsonResponse.data);
    hideloader();
  
  };

 

  return(
    
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lets Grow More</h1>
      </header>
      
      <button onClick={loadData} className="App-button"> <b>Get data</b></button>
      
      <div className="App-data">
        {pics.map(({id, email, first_name, last_name, avatar})=>(
          
          <span key={id} className="App-list">
          <img src={avatar} className="App-user" alt="user"></img>
          <br/>
          <br/>
           {first_name} {last_name}
          <br></br>
           {email}
         
          </span> 
        ))
        }
      </div>
      
    </div>
    {loader}
    </>
  );
};

export default App;






