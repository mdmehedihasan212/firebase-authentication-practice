import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithCredential, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const GoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
        console.error(error);
      })
  };

  const githubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        setUser({})
      });
  };

  return (
    <div className="App">
      <h1>Firebase Authentication Learning</h1>
      <img src={user.photoURL} alt="" />
      <h2>Name: {user.displayName}</h2>
      <h2>E-mail: {user.email}</h2>
      {user.displayName ?
        <>
          <br />
          <button onClick={handleSingOut}>Sing Out</button>
        </> :
        <>
          <button onClick={GoogleSingIn}>Google Sing In</button>
          <button onClick={githubSingIn}>Github Sing In</button>
        </>
      }

    </div>
  );
}

export default App;
