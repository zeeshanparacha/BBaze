import { lazy, Suspense } from "react"
import { Route, Navigate, Routes as Switch } from "react-router-dom"
import Loader from '../components/loader'

const Login = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../pages/Login')), 1000);
    });
});
const Dashboard = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../pages/Dashboard')), 1000);
    });
});
const AddProject = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../pages/AddProject')), 1000);
    });
});
const Organizer = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../pages/Organizer')), 1000);
    });
});
const Profile = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../pages/Profile')), 1000);
    });
});
const Forget = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../pages/Forget')), 1000);
    });
});
const Approve = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('../pages/Approve')), 1000);
    });
});

export const Routes = () => {

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    // const isLoggedIn = 'true'

    return (
        <Suspense fallback={<Loader/>}>
            <Switch>
                {isLoggedIn !== 'true' && <Route exact path="/" element={<Login />} />}
                {isLoggedIn !== 'true' && <Route exact path="/forget" element={<Forget />} />}
                {isLoggedIn === 'true' && <Route exact path="/dashboard" element={<Dashboard />} />}
                {isLoggedIn === 'true' && <Route exact path="/addproject" element={<AddProject />} />}
                {isLoggedIn === 'true' && <Route exact path="/organizer" element={<Organizer />} />}
                {isLoggedIn === 'true' && <Route exact path="/profile" element={<Profile />} />}
                {isLoggedIn === 'true' && <Route exact path="/approve" element={<Approve />} />}
                <Route path="*" element={isLoggedIn === 'true' ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />}/>
            </Switch>
        </Suspense>
    );
};
