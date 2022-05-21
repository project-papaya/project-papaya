import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Papaya } from './pages/papaya';
import { User } from './pages/user';
import { Subverse } from './pages/subverse';
import { Edit } from './pages/edit';

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/:userId" element={<User />} />
                <Route path="/:userId/:subverseId" element={<Subverse />} />
                <Route path="/:userId/:subverseId/edit" element={<Edit />} />
                <Route index element={<Papaya />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
