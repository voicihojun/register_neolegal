import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToInscription = () => {
    navigate("/inscription");
  };

  return (
    <div className="mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h5 className="card-title">Sign up Page</h5>
          <p className="card-text">
            Cliquez sur le bouton ci-dessous pour la page d'inscription.
          </p>
          <button onClick={redirectToInscription} className="btn btn-primary">
            Aller Inscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
