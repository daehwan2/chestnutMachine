import React from "react";

function Score({ score }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center w-[225px] h-[75px] bg-[black] text-[red] text-[66px] text-center font-sans tracking-[.13em] rounded-[8px]">
        <strong className="translate-x-[5px]">{score}</strong>
      </div>
    </div>
  );
}

export default Score;
