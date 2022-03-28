import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GoHome() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return <div>GoHome</div>;
}

export default GoHome;
