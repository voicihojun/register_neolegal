import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
const MerciIndex = ({ name }) => {
  const navigate = useNavigate();
  if (name) {
    navigate(`/${name}`);
  }

  return (
    <div id="index-container">
      <Outlet />
    </div>
  );
};

export default MerciIndex;
