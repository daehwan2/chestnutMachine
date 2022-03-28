import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { authService } from "../fbase";
import { FcGoogle } from "react-icons/fc";
function LoginButton() {
  const onGoogleLogin = async (e) => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider);
  };
  return (
    <div>
      <button
        type="button"
        onClick={onGoogleLogin}
        className="flex justify-center items-center bg-[white] text-[20px] text-center w-[280px] h-[60px] border-[1px] border-black rounded-[10px] drop-shadow-lg">
        <FcGoogle className="text-[30px] mr-[4px]" />
        <strong>구글로그인</strong>
      </button>
    </div>
  );
}

export default LoginButton;
