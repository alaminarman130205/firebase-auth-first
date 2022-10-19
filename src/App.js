import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./Firebase/Firebase.config";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .error((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>app.js file</h1>
      <button onClick={handleGoogle}>google coming </button>
    </div>
  );
}

export default App;
