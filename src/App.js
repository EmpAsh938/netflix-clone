import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup, Error } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from './hooks'

function App() {
  const { user } = useAuthListener();
  return (
    <BrowserRouter>
      <Switch>

        <IsUserRedirect
          user={user}
          loggedPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedPath={ROUTES.BROWSE}
          path={ROUTES.SIGNIN}
        >
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedPath={ROUTES.BROWSE}
          path={ROUTES.SIGNUP}
        >
          <Signup />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <Route path={ROUTES.ERROR}>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
