import React from "react";

function Profile({ userObj }) {
  return (
    <div className="flex items-center">
      <img
        src={userObj.photoURL}
        alt={userObj.name}
        className="w-[60px] h-[60px] rounded-[50%] mr-[10px]"
      />
      <div className="flex flex-col justify-center">
        <strong className="text-[30px]">{userObj.name} 님</strong>
        <div className="text-[12px] translate-y-[-8px]">{userObj.email}</div>
      </div>
    </div>
  );
}

export default Profile;
