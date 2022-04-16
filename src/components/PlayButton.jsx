import { ref, set } from "firebase/database";
import React from "react";
import { database } from "../fbase";

function PlayButton({ isPlaying, isCompleted, seconds }) {
  const onPlayButton = () => {
    set(ref(database, "isPlaying"), true);
    set(ref(database, "turn"), 1);
  };
  return (
    <div>
      <button
        onClick={onPlayButton}
        className={`flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg ${
          isPlaying ? "pointer-events-none bg-gray-300" : ""
        }`}>
        <strong>
          {isPlaying
            ? isCompleted
              ? `게임끝 ( ${seconds}초 뒤 나가집니다. )`
              : "게임 중"
            : "게임 하기"}
        </strong>
      </button>
    </div>
  );
}

export default PlayButton;
