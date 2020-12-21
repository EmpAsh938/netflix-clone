import { useContext, useState } from "react";
import { Signin } from "../components";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";

export function SignupContainer() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInValid = firstName === "" || email === "" || password === "";

  const handleSubmit = (e) => {
    e.preventDefault();

    // do firebase here
    firebase
        .auth()
            .createUserWithEmailAndPassword(email, password)
                .then((result) => 
                    result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random()* 5) + 1,
                    }).then(() => {
                        history.push(ROUTES.BROWSE)
                    })
                )
                .catch((error) => {
                    setFirstName('')
                    setEmail('')
                    setPassword('')
                    setError(error.message)
                })
  };
  return (
    <Signin>
      <Signin.Title>Sign Up</Signin.Title>
      {error && <Signin.Error>{error}</Signin.Error>}

      <Signin.Base onSubmit={handleSubmit} method="POST">
        <Signin.Input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Signin.Input
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Signin.Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Signin.Submit disabled={isInValid} type="submit">
          Sign Up
        </Signin.Submit>

        <Signin.Text>
          Already a user?{" "}
          <Signin.Link to={ROUTES.SIGNIN}>Sign in now.</Signin.Link>
          <Signin.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Signin.TextSmall>
        </Signin.Text>
      </Signin.Base>
    </Signin>
  );
}
