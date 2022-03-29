import React, { useEffect, useState } from "react";

function Ranking({ scoresObj }) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    setResult(scoresObj.sort((a, b) => b.score - a.score));
  }, [scoresObj]);
  return (
    <div className="flex flex-col justify-center items-center py-[50px] w-[100%] md:w-[500px] m-auto">
      <strong className="text-[24px]">랭킹</strong>

      <ol className="flex justify-around w-[100%] mb-[20px]">
        <li className="flex flex-col justify-around text-center">
          <div className="mb-[10px]">순위</div>
          {result.map((score, i) => (
            <div className="mb-[5px]">{i + 1}</div>
          ))}
        </li>
        <li className="flex flex-col justify-around text-center">
          <div className="mb-[10px]">이름</div>
          {result.map((score, i) => (
            <div className="mb-[5px]">{score.name}</div>
          ))}
        </li>
        <li className="flex flex-col justify-around text-center">
          <div className="mb-[10px]">점수</div>
          {result.map((score, i) => (
            <div className="text-[red] bg-[black] rounded-[4px] px-[5px] mb-[5px]">
              {score.score}
            </div>
          ))}
        </li>
        <li className="flex flex-col justify-around text-center">
          <div className="mb-[10px]">플레이시간</div>
          {result.map((score, i) => (
            <div className="mb-[5px]">{score.createdAt}</div>
          ))}
        </li>
      </ol>
      <div className="text-center text-[12px] font-bold	">
        <strong>
          본 페이지는 아두이노로 만든 딱밤머신과 연동되는 웹입니다.
          <br />
          기계를 이용할때 사용하세요.
        </strong>
      </div>
    </div>
  );
}

export default Ranking;
