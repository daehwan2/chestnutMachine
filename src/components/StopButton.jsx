import { ref, set } from "firebase/database";
import React from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../fbase";

function StopButton() {
  const navigate = useNavigate();
  const onStopButton = () => {
    set(ref(database, "isPlaying"), false);
    set(ref(database, "playingUser"), null);
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={onStopButton}
        className="flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg">
        <strong>그만 두기</strong>
      </button>
    </div>
  );
}

export default StopButton;
