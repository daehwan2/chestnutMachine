import { onValue, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { GiHighPunch, GiPunchingBag } from "react-icons/gi";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import JoinButton from "../components/JoinButton";
import Profile from "../components/Profile";
import RankingButton from "../components/RankingButton";
import Score from "../components/Score";
import { database } from "../fbase";

function Home({ userObj, isPlaying, playingUser, bestScore, playingUsers }) {
  return (
    <>
      {userObj ? (
        <>
          <div className="flex flex-col justify-center items-center h-[100%]">
            <div className="mb-[5px]">
              <Profile userObj={userObj} />
            </div>
            <div className="mb-[30px]">
              <div className="text-center">나의 최고 기록</div>
              <Score userObj={userObj} score={bestScore} />
            </div>
            <div>
              {playingUsers.length === 0
                ? "게임중인 유저가 없습니다."
                : `${playingUsers[0].name}님의 방이 있습니다. ( ${playingUsers.length}/ 4)`}
            </div>
            <div className="mb-[20px]">
              <JoinButton
                isPlaying={isPlaying}
                userObj={userObj}
                playingUser={playingUser}
                playingUsers={playingUsers}
              />
            </div>
            <div className="mb-[20px]">
              <RankingButton />
            </div>
            <div className="mb-[20px]">
              <LogoutButton />
            </div>
            <div className="text-center text-[12px] font-bold	">
              <strong>
                본 페이지는 아두이노로 만든 딱밤머신과 연동되는 웹입니다.
                <br />
                기계를 이용할때 사용하세요.
              </strong>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center h-[100%]">
            <div className="mb-[40px]">
              <strong className="flex">
                <GiHighPunch className="text-[100px]" />
                <GiPunchingBag className="text-[100px]" />
              </strong>
            </div>

            <div className="mb-[20px]">
              <LoginButton />
            </div>
            <div className="mb-[20px]">
              <RankingButton />
            </div>

            <div className="text-center text-[12px] font-bold	">
              <strong>
                본 페이지는 아두이노로 만든 딱밤머신과 연동되는 웹입니다.
                <br />
                기계를 이용할때 사용하세요.
              </strong>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
