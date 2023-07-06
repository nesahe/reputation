import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { publicRoutesArr, privateRoutesArr } from './routes';

import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

import Layout from './components/layout/Layout';

import ErrorPage from './pages/ErrorPage';

const AppRouter = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route element={<PrivateRoute />}>
                    {privateRoutesArr.map(({ path, Component }) =>
                        <Route path={path} key={path} element={<Component />} />
                    )}
                </Route>
                <Route element={<PublicRoute />}>
                    {publicRoutesArr.map(({ path, Component }) =>
                        <Route path={path} key={path} element={<Component />} />
                    )}
                </Route>
                <Route path="*" Component={ErrorPage} />
            </Route>
        </Routes>
    );
};

export default AppRouter;