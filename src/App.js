import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
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
      })
  };

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
      <>
        <div>
          <img style={{ 'width': '100px' }} src={user.photoURL} alt="" />
          <h4>Name: {user.displayName}</h4>
          <p>E-mail: {user.email}</p>
        </div>
        <button onClick={GoogleSingIn}>Google Sing In</button>
        <button onClick={handleSingOut}>Sing Out</button>
      </>
    </div>
  );
}

export default App;
