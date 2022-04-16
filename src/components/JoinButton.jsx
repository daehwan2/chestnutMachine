import { push, ref, set } from "firebase/database";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../fbase";

function JoinButton({ isPlaying, userObj, playingUser, playingUsers }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("userObj", userObj);
    console.log("playingUsers", playingUsers);
  }, []);
  const onJoinButton = () => {
    let isUser = false;
    playingUsers.map((user) => {
      if (user.uid === userObj.uid) {
        isUser = true;
        navigate("/play");
        return;
      }
    });
    if (isUser) {
      return;
    }
    if (isPlaying) {
      alert("게임이 시작되었습니다.");
      return;
    }
    if (playingUsers.length > 3) {
      alert("인원이 다찼습니다.");
      return;
    }
    const usersListRef = ref(database, "playingUsers");
    const newUserRef = push(usersListRef);
    set(newUserRef, { ...userObj, score: 0 });
    navigate("/play");
  };
  return (
    <div>
      <button
        onClick={onJoinButton}
        className="flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg">
        <strong>{playingUsers.length === 0 ? "방 만들기" : "참여하기"}</strong>
      </button>
    </div>
  );
}

export default JoinButton;
