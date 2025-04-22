import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import LoginPage from './Login/Login';
import RegisterForm from './Register/Register';
import PlatformSetup from './pages/Platform';
import SideBar from './pages/SideBar';
import CreateCampaign from './pages/CreateCampaign';
import PromoterProfile from './pages/PromoterProfile';
import LeadProfile from './pages/LeadProfile';
import Setting from './pages/Setting'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Layout = ({ children }) => (
    <div className="flex">
      {/* <SideBar /> */}
      <div className="flex-grow p-4">{children}</div>
    </div>

  );

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/loginpage" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/registerpage" element={<RegisterForm />} />

      {/* Protected Routes - only show if logged in */}
      {isLoggedIn ? (
        <>
          <Route
            path="/"
            element={
              <Layout>
                <SideBar />
              </Layout>
            }
          />
           <Route path="/settings" element={<Setting />} />
          <Route
            path="/create-campaign"
            element={
              <Layout>
                <CreateCampaign />
              </Layout>
            }
          />
          <Route
            path="/promoter/:id"
            element={
              <Layout>
                <PromoterProfile />
              </Layout>
            }
          />
          <Route
            path="/lead-profile"
            element={
              <Layout>
                <LeadProfile />
              </Layout>
            }
          />
        </>
      ) : (
        // If not logged in, redirect everything to login
        <Route path="*" element={<Navigate to="/loginpage" />} />
      )}
    </Routes>
  );
}

export default App;
