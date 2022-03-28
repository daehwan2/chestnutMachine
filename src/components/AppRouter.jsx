import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Play from "../routes/Play";
import Ranking from "../routes/Ranking";
import { GiPunchBlast } from "react-icons/gi";
function AppRouter({ isLoggedIn, userObj }) {
  return (
    <>
      {/* logo */}
      <a href="/" className="flex items-center text-[20px] p-[5px]">
        <GiPunchBlast className="text-[red] text-[40px]" />
        <strong>딱밤머신</strong>
      </a>

      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home userObj={userObj} />} />
              <Route path="/ranking" element={<Ranking userObj={userObj} />} />
              <Route path="/play" element={<Play userObj={userObj} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/ranking" element={<Ranking />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;