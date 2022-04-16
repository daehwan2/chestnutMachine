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
  const [seconds, setSeconds] = useState(5);
  const [isCompleted, setIsCompleted] = useState(false);
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
    onValue(ref(database, "isCompleted"), (snapshot) => {
      const data = snapshot.val();
      setIsCompleted(data);
      console.log(data);
    });
  }, []);
  useEffect(() => {}, [playingUsers]);
  useEffect(() => {
    if (score > 0 && isPlaying && !isCompleted) {
      const array = [...playingUsers];
      array[turn - 1] = { ...playingUsers[turn - 1], score: score };
      set(ref(database, "playingUsers"), array);

      const obj = {
        score: score,
        name: playingUsers[turn - 1].name,
        email: playingUsers[turn - 1].email,
        uid: playingUsers[turn - 1].uid,
        createdAt: Date.now(),
      };
      const scoreListRef = ref(database, "scores");
      const newScoreRef = push(scoreListRef);
      set(newScoreRef, obj);

      if (turn >= playingUsers.length) {
        //점수 측정 완료
        set(ref(database, "turn"), 0);
        set(ref(database, "isCompleted"), true);
        setInterval(() => {
          setSeconds((prev) => prev - 1);
        }, 1000);
        setTimeout(() => {
          set(ref(database, "playingUsers"), null);
          set(ref(database, "isPlaying"), false);
          set(ref(database, "isCompleted"), false);
          navigate("/");
        }, 6000);
        return;
      }

      set(ref(database, "turn"), turn + 1);
    }
  }, [score]);
  return (
    <div className="flex flex-col justify-center items-center h-[100%]">
      <h1 className="text-[30px] mb-[20px]">
        {playingUsers.length >= 1 ? playingUsers[0].name : ""}님의 방입니다.{" "}
        {playingUsers.length >= 1 ? playingUsers.length : 0}/ 4
      </h1>

      <div className="flex flex-wrap justify-around">
        {[0, 1, 2, 3].map((i) => (
          <>
            <div
              className={`border-[1px] border-black rounded-[4px] w-[45%] flex flex-col justify-center items-center mb-[10px] ${
                i + 1 === turn && isPlaying
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                  : ""
              }`}>
              {playingUsers.length >= i + 1 ? (
                <>
                  <Profile
                    userObj={{
                      email: playingUsers[i].email,
                      name: playingUsers[i].name,
                      photoURL: playingUsers[i].photoURL,
                      uid: playingUsers[i].uid,
                    }}
                    size="small"
                  />
                  <Score
                    score={playingUsers[i].score ? playingUsers[i].score : 0}
                    size="small"
                  />
                  <div className="text-center">
                    {i + 1 === turn && isPlaying
                      ? playingUsers[i]
                        ? playingUsers[i].score > 0
                          ? "점수 측정 완료!"
                          : ""
                        : "딱밤머신을 쳐주세요."
                      : ""}
                  </div>
                </>
              ) : (
                <div>대기중입니다.</div>
              )}
            </div>
          </>
        ))}
      </div>

      {playingUsers.length >= 1 ? (
        <div className="mb-[20px]">
          {playingUsers[0].uid === userObj.uid ? (
            <PlayButton
              isPlaying={isPlaying}
              isCompleted={isCompleted}
              seconds={seconds}
            />
          ) : (
            <div className="flex justify-center items-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg bg-gray-300">
              {isPlaying
                ? isCompleted
                  ? `게임끝 ( ${seconds}초 뒤 나가집니다. )`
                  : "게임중"
                : "방장님이 게임하기 버튼을 누르면 시작됩니다."}
            </div>
          )}
        </div>
      ) : (
        <></>
      )}

      <StopButton
        isPlaying={isPlaying}
        playingUsers={playingUsers}
        userObj={userObj}
      />
    </div>
  );
}

export default Play;
