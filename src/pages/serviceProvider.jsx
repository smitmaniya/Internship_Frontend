import Drawer from "../components/serviceProvider/drawer";
import React, { useState } from 'react';
import DashBoard from "../components/serviceProvider/newOrdertile";
import Order from "../components/serviceProvider/order";
import ServiceTable from "../components/serviceProvider/serviceList";
import BankAccount from "../components/driver/bankDetail";
import ServiceProfileInfo from "../components/serviceProvider/profileService";


export default function ServiceProvider() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const tiles = [
    { name: 'Dashboard', icon: 'fa-tachometer-alt' },
    { name: 'Orders', icon: 'fa-shopping-cart' },
    { name: 'Bank Detail', icon: 'fa-wallet' },
    { name: 'Services', icon: 'fa-concierge-bell' },
    { name: 'Profile', icon: 'fa-user' },
  ];

  return (
    <div className="app-container">
      <Drawer setActiveTab={setActiveTab} tiles={tiles} title="Admin Dashboard" />
      <div className="content">
        {activeTab === 'Dashboard' && <DashBoard/>}
        {activeTab === 'Orders' && <Order/> }
        {activeTab === 'Bank Detail' && <BankAccount/>}
        {activeTab === 'Services' && <ServiceTable/>}
        {activeTab === 'Profile' && <ServiceProfileInfo/>}

        {activeTab === 'Settings' && <div>Settings Content</div>}
        {activeTab === 'Logout' && <div>Logout Content</div>}
      </div>
    </div>
  );
}
