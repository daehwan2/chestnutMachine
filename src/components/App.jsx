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
  const [bestScore, setBestScore] = useState(0);
  const [scoresObj, setScoresObj] = useState([]);

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
    console.log(bestScore);
    if (init) {
      onValue(ref(database, "scores"), (snapshot) => {
        let scores = [];
        let max = 0;
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (userObj) {
            if (userObj.uid === childData.uid && childData.score > max) {
              max = childData.score;
              console.log(max);
            }
            setBestScore(max);
          }
          console.log("childData:", childData);
          setScoresObj((prev) => [...prev, childData]);
          scores.push(childData);
        });
        console.log("scores", scores);
      });
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
    }
  }, [init]);
  useEffect(() => {
    console.log("scoresObj", scoresObj);
  }, [scoresObj]);
  return (
    <div className="mainFont">
      {init ? (
        <AppRouter
          isPlaying={isPlaying}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          playingUser={playingUser}
          scoresObj={scoresObj}
          bestScore={bestScore}
        />
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default App;
