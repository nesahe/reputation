import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {

    const auth = localStorage.getItem('jwt');

    return !auth ? <Outlet /> : <Navigate to="/" />
};

export default PublicRoute;