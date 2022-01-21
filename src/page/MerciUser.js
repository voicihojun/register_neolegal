import React from "react";
import Legal from "../image/legal.jpeg";
import { useLocation, useNavigate } from "react-router-dom";

const MerciUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const moveToInscription = () => {
    navigate("/inscription");
  };
  return (
    <div className="mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <img
            style={{ width: "100%", marginBottom: "20px" }}
            src={Legal}
            alt="background"
          />
          <h5 className="card-title">{location.state},</h5>
          <p className="card-text">Merci pour votre inscription.</p>
          <button onClick={moveToInscription} className="btn btn-primary">
            Aller Inscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerciUser;
