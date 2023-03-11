import Header from '@/components/_share/Header';
import Sidebar from '@/components/_share/Sidebar';
import { useMyContext } from '@/store/context/store';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  const { isPageWatch } = useMyContext();
  return (
    <div className="layout">
      <Header />
      <div className="layout__main">
        {!isPageWatch && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
