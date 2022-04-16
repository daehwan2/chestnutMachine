import { ref, set } from "firebase/database";
import React from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../fbase";

function StopButton({ playingUsers, userObj, isPlaying }) {
  const navigate = useNavigate();
  const onStopButton = () => {
    const result = playingUsers.filter((user) => user.uid !== userObj.uid);
    set(ref(database, "playingUsers"), result);
    if (playingUsers.length === 0) {
      set(ref(database, "playingUsers"), null);
      set(ref(database, "isPlaying"), false);
      set(ref(database, "isCompleted"), false);
    }
    if (isPlaying) {
      set(ref(database, "playingUsers"), null);
      set(ref(database, "isPlaying"), false);
      set(ref(database, "isCompleted"), false);
    }
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
