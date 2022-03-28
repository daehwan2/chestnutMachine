import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Play from "../routes/Play";
import Ranking from "../routes/Ranking";
import { GiPunchBlast } from "react-icons/gi";
import GoHome from "./GoHome";
function AppRouter({ isLoggedIn, userObj, isPlaying, playingUser }) {
  useEffect(() => {
    console.log("play2", playingUser);
  }, [playingUser]);
  return (
    <div className="h-[100vh] bg-[#DFD8D8]">
      {/* logo */}
      <a
        href="/"
        className="absolute top-0 left-0 flex items-center text-[20px] p-[5px]">
        <GiPunchBlast className="text-[red] text-[40px]" />
        <strong>딱밤머신</strong>
      </a>

      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route
                path="/"
                element={
                  <Home
                    userObj={userObj}
                    isPlaying={isPlaying}
                    playingUser={playingUser}
                  />
                }
              />
              <Route path="/ranking" element={<Ranking userObj={userObj} />} />
              <Route
                path="/play"
                element={
                  <Play
                    userObj={userObj}
                    isPlaying={isPlaying}
                    playingUser={playingUser}
                  />
                }
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Home isPlaying={isPlaying} />} />
              <Route path="/ranking" element={<Ranking />} />
              <Route path="/play" element={<GoHome />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
