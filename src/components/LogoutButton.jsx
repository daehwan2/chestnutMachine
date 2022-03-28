import React from "react";
import { authService } from "../fbase";

function LogoutButton() {
  const onLogOutClick = () => {
    authService.signOut();
  };
  return (
    <div>
      <button
        type="button"
        onClick={onLogOutClick}
        className="flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg">
        <strong>로그아웃</strong>
      </button>
    </div>
  );
}

export default LogoutButton;
