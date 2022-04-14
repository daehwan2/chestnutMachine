import { get, onValue, push, ref, set } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RankingButton from "../components/RankingButton";
import Score from "../components/Score";
import Profile from "../components/Profile";
import StopButton from "../components/StopButton";
import { database, dbService } from "../fbase";
import PlayButton from "../components/PlayButton";

function Play({ isPlaying, userObj, playingUser, playingUsers }) {
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      console.log("11");
      console.log();
      set(ref(database, "isPlaying"), false);
    });
    onValue(ref(database, "score"), (snapshot) => {
      const data = snapshot.val();
      setScore(data);
      console.log(data);
    });
    onValue(ref(database, "turn"), (snapshot) => {
      const data = snapshot.val();
      setTurn(data);
      console.log(data);
    });
    set(ref(database, "isCompleted"), false);
  }, []);
  useEffect(() => {}, [playingUsers]);
  useEffect(() => {
    if (score > 0 && isPlaying) {
      const obj = {
        score: score,
        name: playingUsers[turn - 1].name,
        email: playingUsers[turn - 1].email,
        uid: playingUsers[turn - 1].uid,
        createdAt: Date.now(),
      };
      set(ref(database, "turn"), turn < playingUsers.length ? turn + 1 : 1);
      const scoreListRef = ref(database, "scores");
      const newScoreRef = push(scoreListRef);
      set(newScoreRef, obj);
      set(ref(database, "isCompleted"), true);
    }
  }, [score]);
  return (
    <div className="flex flex-col justify-center items-center h-[100%]">
      <h1 className="text-[30px] mb-[20px]">
        {playingUsers.length >= 1 ? playingUsers[0].name : ""}님의 방입니다.{" "}
        {playingUsers.length >= 1 ? playingUsers.length : 0}/ 4
      </h1>
      <div className="flex flex-wrap justify-around">
        <div className="border-[1px] border-black rounded-[4px] w-[45%] flex flex-col justify-center items-center mb-[10px]">
          {playingUsers.length >= 1 ? (
            <>
              <Profile
                userObj={{
                  email: playingUsers[0].email,
                  name: playingUsers[0].name,
                  photoURL: playingUsers[0].photoURL,
                  uid: playingUsers[0].uid,
                }}
                size="small"
              />
              <Score score={score} size="small" />
              <div className="text-center">
                {score > 0 ? "점수 측정 완료!" : "딱밤머신을 쳐주세요."}
              </div>
            </>
          ) : (
            <div>대기중입니다.</div>
          )}
        </div>

        <div className="border-[1px] border-black rounded-[4px] w-[45%] h-[125px] flex flex-col justify-center items-center mb-[10px]">
          {playingUsers.length >= 2 ? (
            <>
              <Profile
                userObj={{
                  email: playingUsers[1].email,
                  name: playingUsers[1].name,
                  photoURL: playingUsers[1].photoURL,
                  uid: playingUsers[1].uid,
                }}
                size="small"
              />
              <Score score={score} size="small" />
              <div className="text-center">
                {score > 0 ? "점수 측정 완료!" : "딱밤머신을 쳐주세요."}
              </div>
            </>
          ) : (
            <div>대기중입니다.</div>
          )}
        </div>
        <div className="border-[1px] border-black rounded-[4px] w-[45%] h-[125px] flex flex-col justify-center items-center mb-[10px]">
          {playingUsers.length >= 3 ? (
            <>
              <Profile
                userObj={{
                  email: playingUsers[2].email,
                  name: playingUsers[2].name,
                  photoURL: playingUsers[2].photoURL,
                  uid: playingUsers[2].uid,
                }}
                size="small"
              />
              <Score score={score} size="sm8all" />
              <div className="text-center">
                {score > 0 ? "점수 측정 완료!" : "딱밤머신을 쳐주세요."}
              </div>
            </>
          ) : (
            <div>대기중입니다.</div>
          )}
        </div>
        <div className="border-[1px] border-black rounded-[4px] w-[45%] h-[125px] flex flex-col justify-center items-center mb-[10px]">
          {playingUsers.length >= 4 ? (
            <>
              <Profile
                userObj={{
                  email: playingUsers[3].email,
                  name: playingUsers[3].name,
                  photoURL: playingUsers[3].photoURL,
                  uid: playingUsers[3].uid,
                }}
                size="small"
              />
              <Score score={score} size="small" />
              <div className="text-center">
                {score > 0 ? "점수 측정 완료!" : "딱밤머신을 쳐주세요."}
              </div>
            </>
          ) : (
            <div>대기중입니다.</div>
          )}
        </div>
      </div>

      {playingUsers.length >= 1 ? (
        <div className="mb-[20px]">
          {playingUsers[0].uid === userObj.uid ? (
            <PlayButton isPlaying={isPlaying} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <StopButton playingUsers={playingUsers} userObj={userObj} />
    </div>
  );
}

export default Play;
