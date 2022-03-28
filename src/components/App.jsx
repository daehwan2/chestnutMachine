import { useEffect, useState } from "react";
import { authService, database } from "../fbase";
import "firebase/database";
import { onValue, ref, set } from "firebase/database";
import AppRouter from "./AppRouter";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
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

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     set(ref(database, "test22"), {
  //       abc: "다다다",
  //     });
  //     onValue(ref(database, "score"), (snapshot) => {
  //       const data = snapshot.val();
  //       setData(data);
  //       console.log(data);
  //     });
  //   }
  // }, [isLoggedIn]);

  return (
    <div>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default App;
