import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

function Ranking({ scoresObj, userObj }) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    setResult(scoresObj.sort((a, b) => b.score - a.score));
  }, [scoresObj]);
  return (
    <div className="flex flex-col justify-center items-center py-[50px] w-[100%] md:w-[500px] m-auto h-[100%]">
      <strong className="text-[24px]">랭킹</strong>
      <div className="flex flex-col text-center">
        <div className="flex">
          <div className="w-[50px]">순위</div>
          <div className="w-[70px]">이름</div>
          <div className="w-[50px]">점수</div>
          <div className="w-[170px]">플레이시간</div>
        </div>
      </div>
      <ol className="flex flex-col text-center h-[100%] overflow-y-auto overflow-x-visible">
        {result.map((score, i) => (
          <li
            className={
              score.uid === userObj.uid
                ? "flex relative border-[red] border-[1px]"
                : "flex relative"
            }>
            {score.uid === userObj.uid ? (
              <div className="absolute flex items-center justify-center text-[blue]">
                <strong className="text-[16px]">Me</strong>
              </div>
            ) : (
              <></>
            )}
            <div className="w-[50px]">{i + 1}</div>
            <div className="w-[70px]">{score.name}</div>
            <div className="w-[50px] h-[100%] text-[red] bg-[black] rounded-[4px] flex justify-center items-center">
              <div>{score.score}</div>
            </div>
            <div className="w-[170px] mb-[5px]">
              {`${new Date(score.createdAt).getFullYear()}년 ${new Date(
                score.createdAt
              ).getMonth()}월 ${new Date(
                score.createdAt
              ).getDate()}일 ${new Date(score.createdAt).getHours()}:${new Date(
                score.createdAt
              ).getMinutes()}`}
            </div>
          </li>
        ))}
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
