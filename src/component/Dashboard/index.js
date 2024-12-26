import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import image from "../../assest/images.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/");
  };

  return (
    <div className="background">
      <header className="sub-container">
        <img src={image} alt="Raily Logo" className="image" />
        <button className="logout-button" onClick={Logout}>
          Logout
        </button>
      </header>
    </div>
  );
};

export default Dashboard;
