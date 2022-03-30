import { ref, set } from "firebase/database";
import React from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../fbase";

function RankingButton({ isPlaying }) {
  const navigate = useNavigate();
  const onClickButton = () => {
    if (isPlaying) {
      set(ref(database, "isPlaying"), false);
      set(ref(database, "playingUser"), null);
    }
    navigate("/ranking");
  };
  return (
    <div>
      <button
        onClick={onClickButton}
        className="flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg">
        <strong>랭킹 보기</strong>
      </button>
    </div>
  );
}

export default RankingButton;
