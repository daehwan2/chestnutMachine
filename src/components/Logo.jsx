import React from "react";
import { GiPunchBlast } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Logo({ disabled }) {
  const navigate = useNavigate();
  const onClickButton = () => {
    if (disabled) {
      return;
    }
    navigate("/");
  };
  return (
    <button
      onClick={onClickButton}
      className="absolute top-0 left-0 flex items-center text-[20px] p-[5px]">
      <GiPunchBlast className="text-[red] text-[40px]" />
      <strong>딱밤머신</strong>
    </button>
  );
}

export default Logo;
