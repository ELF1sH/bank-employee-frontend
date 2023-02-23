import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from './components/ui/organisms/sidebar/SidebarController';
import AuthPage from './pages/auth/AuthPage';
import ClassesPage from './pages/classes/ClassesPage';

import 'antd/dist/reset.css';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<AuthPage />} />
    <Route
      path="*"
      element={(
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ padding: '20px 30px', flexGrow: 1 }}>
            <Routes>
              <Route path="/classes" element={<ClassesPage />} />
            </Routes>
          </div>
        </div>
      )}
    />
  </Routes>
);

export default App;
