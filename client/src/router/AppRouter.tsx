import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RouteLayout from './components/RouteLayout';

import Layout from './components/Layout';

const AppRouter = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="*" element={<RouteLayout />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;