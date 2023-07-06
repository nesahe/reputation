import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {

    const auth = localStorage.getItem('jwt');

    return auth ? <Navigate to="/" /> : <Outlet />
};

export default PublicRoute;