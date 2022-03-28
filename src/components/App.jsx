import { useEffect, useState } from "react";
import { authService, database } from "../fbase";
import "firebase/database";
import { onValue, ref, set } from "firebase/database";
import AppRouter from "./AppRouter";
import "../font.css";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingUser, setPlayingUser] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setIsLoggedIn(true);
        setUserObj({
          name: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
          email: user.email,
        });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  useEffect(() => {
    //   if (isLoggedIn) {
    //     set(ref(database, "test22"), {
    //       abc: "다다다",
    //     });
    onValue(ref(database, "isPlaying"), (snapshot) => {
      const data = snapshot.val();
      setIsPlaying(data);
      console.log(data);
    });
    onValue(ref(database, "playingUser"), (snapshot) => {
      const data = snapshot.val();
      setPlayingUser(data);
      console.log(data);
    });
    //   }
  }, []);
  useEffect(() => {
    console.log("play1", playingUser);
  }, [playingUser]);
  return (
    <div className="mainFont">
      {init ? (
        <AppRouter
          isPlaying={isPlaying}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          playingUser={playingUser}
        />
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default App;
