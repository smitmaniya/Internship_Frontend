import Drawer from "../components/serviceProvider/drawer";
import React, { useState } from 'react';
import DashBoard from "../components/serviceProvider/newOrdertile";
import Order from "../components/serviceProvider/order";
import ServiceTable from "../components/serviceProvider/serviceList";


export default function ServiceProvider() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const tiles = [
    { name: 'Dashboard', icon: 'fa-tachometer-alt' },
    { name: 'Orders', icon: 'fa-shopping-cart' },
    { name: 'Financial', icon: 'fa-wallet' },
    { name: 'Services', icon: 'fa-concierge-bell' },
  ];

  return (
    <div className="app-container">
      <Drawer setActiveTab={setActiveTab} tiles={tiles} title="Admin Dashboard" />
      <div className="content">
        {activeTab === 'Dashboard' && <DashBoard/>}
        {activeTab === 'Orders' && <Order/> }
        {activeTab === 'Financial' && <div>Financial Content</div>}
        {activeTab === 'Services' && <ServiceTable/>}
        {activeTab === 'Settings' && <div>Settings Content</div>}
        {activeTab === 'Logout' && <div>Logout Content</div>}
      </div>
    </div>
  );
}
