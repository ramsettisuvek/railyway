import React, { useState } from 'react';
import raily from "../../assest/image001CHJU.jpg";
import independence from "../../assest/Azadi-Ka-Amrit-Mahotsav.png";
import { useNavigate } from 'react-router-dom';
import './index.css';  
import image from '../../assest/images.png';  

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  const userName = (event) => {
    setUsername(event.target.value);
  };

  const passWord = (event) => {
    setPassword(event.target.value);
  };

  const onClick = (event) => {
    event.preventDefault();
    if (username === "suvek" && password === "1234") {
      alert("Login Successful");
      setUsername("");
      setPassword("");
      navigate("/dashboard");
     
    } else {
      alert("Unsuccessful");
    }
  };


  return (
    <div className='bg'>
      <div className='small-container'>
        <img src={raily} alt="Logo" className='image1' />
        <h1 className='heading'>Commercial Dashboard Vijawada Division</h1>
        <img src={independence} alt="Logo" className='image2'/>
      </div>
      <div className='another-container'>
        <div className='input-contaier'>
        <img src={image} alt="railylogo" className="railylogo"/>
            <form onSubmit={onClick}> 
              <label htmlFor="username" className="labelUser">UserId</label>
              <input
                id="username"
                className="inputuser"
                value={username}
                onChange={userName} 
                type="text"
              />
              
              <label htmlFor="password" className="labelUser">Password</label>
              <input
                id="password"
                className="inputuser"
                type="password"
                value={password}
                onChange={passWord} 
              />
              
              <button className="button" type="submit">Login</button> 
            </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
