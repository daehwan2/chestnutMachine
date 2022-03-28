import React from "react";

function RankingButton() {
  return (
    <div>
      <a
        href="/ranking"
        className="flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg">
        <strong>랭킹 보기</strong>
      </a>
    </div>
  );
}

export default RankingButton;
