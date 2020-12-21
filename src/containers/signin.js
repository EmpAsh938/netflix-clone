import { useContext, useState } from "react";
import { Signin } from "../components";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";

export function SigninContainer() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [isInValid, setIsInValid] = useState(true)

  const isInValid = password === "" || email === "";

  const handleClick = (e) => {
    e.preventDefault();

    // firebase work here!
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // push to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <Signin>
      <Signin.Title>Sign In</Signin.Title>

      {error && <Signin.Error>{error}</Signin.Error>}

      <Signin.Base onSubmit={handleClick} method="POST">
        <Signin.Input
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Signin.Input
          placeholder="Password"
          autoComplete="off"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Signin.Submit disabled={isInValid} type="submit">
          Submit Now
        </Signin.Submit>
      </Signin.Base>

      <Signin.Text>
        New to Netflix?{" "}
        <Signin.Link to={ROUTES.SIGNUP}>Sign up now.</Signin.Link>
      </Signin.Text>
      <Signin.TextSmall>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </Signin.TextSmall>
    </Signin>
  );
}
