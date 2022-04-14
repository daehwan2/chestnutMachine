import React from "react";

function Profile({ userObj, size }) {
  return (
    <div className="flex items-center">
      <img
        src={userObj.photoURL}
        alt={userObj.name}
        className={
          size === "small"
            ? `w-[30px] h-[30px] rounded-[50%] mr-[5px]`
            : `w-[60px] h-[60px] rounded-[50%] mr-[10px]`
        }
      />
      <div className="flex flex-col justify-center">
        <strong
          className={
            size === "small" ? "text-[15px] translate-y-[4px]" : "text-[30px]"
          }>
          {userObj.name} 님
        </strong>
        <div
          className={
            size === "small"
              ? "text-[6px] translate-y-[-4px]"
              : "text-[12px] translate-y-[-8px]"
          }>
          {userObj.email}
        </div>
      </div>
    </div>
  );
}

export default Profile;
