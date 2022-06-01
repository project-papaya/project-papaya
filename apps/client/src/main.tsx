import React, { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Papaya = React.lazy(() => import('./pages/papaya/papaya'));
const User = React.lazy(() => import('./pages/user/user'));
const Subverse = React.lazy(() => import('./pages/subverse/subverse'));
const Edit = React.lazy(() => import('./pages/edit/edit'));

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/:userId" element={
                    <Suspense fallback={"Loading"}>
                        <User />
                    </Suspense>} />
                <Route path="/:userId/:subverseId" element={
                    <Suspense fallback={"Loading"}>
                        <Subverse />
                    </Suspense>} />
                <Route path="/:userId/:subverseId/edit" element={
                    <Suspense fallback={"Loading"}>
                        <Edit />
                    </Suspense>} />
                <Route index element={
                    <Suspense fallback={"Loading"}>
                        <Papaya />
                    </Suspense>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
