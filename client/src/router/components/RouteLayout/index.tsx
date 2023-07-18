import { publicRoutesArr, privateRoutesArr } from '../../../router/routes';

import { Route, Routes } from 'react-router-dom';

const RouteLayout = () => {

    const auth = localStorage.getItem('jwt');

    const routes = auth ? privateRoutesArr : publicRoutesArr

    return (
        <Routes>
            {routes.map(({ path, Component }) =>
                <Route path={path} element={<Component />} key={path} />
            )}
        </Routes>
    );
};

export default RouteLayout;