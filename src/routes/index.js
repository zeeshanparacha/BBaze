import { lazy, Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";

// const LandingPage = lazy(() => import("./landing-page"));
const Login = lazy(() => import('../pages/Login'))

export const Routes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path="/" element={<Login />} />
      </Switch>
    </Suspense>
  );
};
