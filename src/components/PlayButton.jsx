import React from "react";

function PlayButton() {
  return (
    <div>
      <a
        href="/play"
        className="flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg">
        <strong>게임 하기</strong>
      </a>
    </div>
  );
}

export default PlayButton;
