import React from "react";

function Score({ score, size }) {
  return (
    <div className="flex flex-col">
      <div
        className={
          size === "small"
            ? "flex justify-center items-center w-[150px] h-[50px] bg-[black] text-[red] text-[40px] text-center font-sans tracking-[.13em] rounded-[8px]"
            : "flex justify-center items-center w-[225px] h-[75px] bg-[black] text-[red] text-[66px] text-center font-sans tracking-[.13em] rounded-[8px]"
        }>
        <strong className="translate-x-[5px]">{score}</strong>
      </div>
    </div>
  );
}

export default Score;
