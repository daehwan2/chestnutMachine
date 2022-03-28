import { ref, set } from "firebase/database";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../fbase";

function PlayButton({ isPlaying, userObj, playingUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("userObj", userObj);
    console.log("playingUser", playingUser);
  }, []);
  const onPlayButton = () => {
    if (
      (isPlaying && userObj.uid === playingUser.uid) ||
      (!isPlaying && playingUser === null)
    ) {
      set(ref(database, "isPlaying"), true);
      set(ref(database, "playingUser"), userObj);
      navigate("/play");
    } else {
      alert("다른플레이어가 게임중입니다.");
    }
  };
  return (
    <div>
      <button
        onClick={onPlayButton}
        className="flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg">
        <strong>게임 하기</strong>
      </button>
    </div>
  );
}

export default PlayButton;
