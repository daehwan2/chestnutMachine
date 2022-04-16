import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Play from "../routes/Play";
import Ranking from "../routes/Ranking";
import { GiPunchBlast } from "react-icons/gi";
import GoHome from "./GoHome";
import Logo from "./Logo";
function AppRouter({
  isLoggedIn,
  userObj,
  isPlaying,
  playingUser,
  bestScore,
  scoresObj,
  playingUsers,
}) {
  useEffect(() => {
    console.log("play2", playingUser);
  }, [playingUser]);
  return (
    <div className="h-[100vh] bg-[#DFD8D8]">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Logo disabled={isPlaying ? true : false} />
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
                    bestScore={bestScore}
                    playingUsers={playingUsers}
                  />
                }
              />
              <Route
                path="/ranking"
                element={<Ranking scoresObj={scoresObj} userObj={userObj} />}
              />
              <Route
                path="/play"
                element={
                  <Play
                    userObj={userObj}
                    isPlaying={isPlaying}
                    playingUser={playingUser}
                    playingUsers={playingUsers}
                  />
                }
              />
            </>
          ) : (
            <>
              <Route path="/" element={<Home isPlaying={isPlaying} />} />
              <Route
                path="/ranking"
                element={<Ranking scoresObj={scoresObj} />}
              />
              <Route path="/play" element={<GoHome />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
