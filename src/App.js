import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const GoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user)
      })
      .catch((error) => {
        console.error(error);
      }
      )
  };
  return (
    <div className="App">
      <h1>Firebase Authentication Learning</h1>
      <>
        <div className="user-container">
          <h4>Name: {user.displayName}</h4>
          <p>E-mail: {user.email}</p>
        </div>
        <button onClick={GoogleSingIn}>Google Sing In</button>
      </>
    </div>
  );
}

export default App;
