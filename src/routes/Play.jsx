import { get, onValue, push, ref, set } from "firebase/database";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RankingButton from "../components/RankingButton";
import Score from "../components/Score";
import StopButton from "../components/StopButton";
import { database, dbService } from "../fbase";

function Play({ isPlaying, userObj, playingUser }) {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      set(ref(database, "isPlaying"), false);
      set(ref(database, "playingUser"), null);
    });
    onValue(ref(database, "score"), (snapshot) => {
      const data = snapshot.val();
      setScore(data);
      console.log(data);
    });
    set(ref(database, "isCompleted"), false);
  }, []);
  useEffect(() => {
    if (!isPlaying) {
      navigate("/");
      console.log("1234");
    }
  }, [isPlaying]);
  useEffect(() => {
    if (score > 0 && userObj.uid === playingUser.uid) {
      const obj = {
        score: score,
        name: playingUser.name,
        email: playingUser.email,
        uid: playingUser.uid,
        createdAt: Date.now(),
      };
      const scoreListRef = ref(database, "scores");
      const newScoreRef = push(scoreListRef);
      set(newScoreRef, obj);
      set(ref(database, "isCompleted"), true);
    }
  }, [score]);
  return (
    <div className="flex flex-col justify-center items-center h-[100%]">
      <Score score={score} />
      <div className="text-center mb-[10px]">
        {score > 0 ? "점수 측정 완료!" : "딱밤머신을 쳐주세요."}
      </div>
      <div className="mb-[20px]">
        <StopButton />
      </div>
      <RankingButton isPlaying={isPlaying} />
    </div>
  );
}

export default Play;
