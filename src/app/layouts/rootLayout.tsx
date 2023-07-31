import React from 'react';
import { useLocation } from 'react-router-dom';
import { AdminLayout, AuthLayout } from './versions';

const RootLayout = () => {
  const location = useLocation();
  const authRoutes = ['/login'];

  return authRoutes.includes(location.pathname) ? (
    <AuthLayout />
  ) : (
    <AdminLayout />
  );
};

export default RootLayout;
