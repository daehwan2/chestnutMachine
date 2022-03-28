import React from "react";
import { GiHighPunch, GiPunchingBag } from "react-icons/gi";
import BestScore from "../components/BestScore";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import PlayButton from "../components/PlayButton";
import Profile from "../components/Profile";
import RankingButton from "../components/RankingButton";

function Home({ userObj }) {
  return (
    <>
      {userObj ? (
        <>
          <div className="flex flex-col justify-center items-center h-[100%]">
            <div className="mb-[5px]">
              <Profile userObj={userObj} />
            </div>
            <div className="mb-[30px]">
              <BestScore userObj={userObj} />
            </div>
            <div className="mb-[20px]">
              <PlayButton />
            </div>
            <div className="mb-[20px]">
              <RankingButton />
            </div>
            <LogoutButton />
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
