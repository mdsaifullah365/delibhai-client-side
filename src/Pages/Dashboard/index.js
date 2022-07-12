import React, { useState } from 'react';
import MainDashboard from './MainContent';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <MainDashboard sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default Dashboard;
