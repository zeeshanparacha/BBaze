import { lazy, Suspense } from "react"
import { Route, Navigate, Routes as Switch } from "react-router-dom"

const Login = lazy(() => import('../pages/Login'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const AddProject = lazy(() => import('../pages/AddProject'))
const Organizer = lazy(() => import('../pages/Organizer'))
const Profile = lazy(() => import('../pages/Profile'))

export const Routes = () => {

    const isLoggedIn = localStorage.getItem('isLoggedIn')

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                {isLoggedIn !== 'true' && <Route exact path="/" element={<Login />} />}
                {isLoggedIn === 'true' && <Route exact path="/dashboard" element={<Dashboard />} />}
                {isLoggedIn === 'true' && <Route exact path="/addproject" element={<AddProject />} />}
                {isLoggedIn === 'true' && <Route exact path="/organizer" element={<Organizer />} />}
                {isLoggedIn === 'true' && <Route exact path="/profile" element={<Profile />} />}
                <Route path="*" element={isLoggedIn === 'true' ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />}/>
            </Switch>
        </Suspense>
    );
};
