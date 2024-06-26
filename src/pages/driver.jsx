import { useState } from "react";
import Drawer from "../components/serviceProvider/drawer";
import Header from "../components/serviceProvider/header";
import DashBoardDriver from "../css/driver/dashboardDriver";
import OrderCompleted from "../css/driver/orderHistory";

export default function DriverScreen(){
    const [activeTab, setActiveTab] = useState('Dashboard');
    const tiles = [
      { name: 'Dashboard', icon: 'fa-tachometer-alt' },
      { name: 'Order History', icon: 'fa-shopping-cart' },
      { name: 'Profile', icon: 'fa fa-user' },

    ];
    const Orders = [
        { Name: "Cloth Washing", date: "04 Sep 2019", Accept_time:"10:00 PM", Completed_time:"11:00 PM",price: "$5", Total_item: 12, Address: "1499, pope st, LaSalle, Ontario", status: "Completed" },
        { Name: "Cloth Washing", date: "04 Sep 2019", Accept_time:"10:00 PM", Completed_time:"11:00 PM",price: "$5",Total_item: 12, Address: "1499, pope st, LaSalle, Ontario", status: "Completed" },
        { Name: "Cloth Washing", date: "04 Sep 2019", Accept_time:"10:00 PM", Completed_time:"11:00 PM",price: "$5",Total_item: 12, Address: "1499, pope st, LaSalle, Ontario", status: "Completed" },
        { Name: "Cloth Washing", date: "04 Sep 2019", Accept_time:"10:00 PM", Completed_time:"11:00 PM",price: "$5",Total_item: 12, Address: "1499, pope st, LaSalle, Ontario", status: "Completed" },
    ];

    return(
        <div className="app-container">
      <Drawer setActiveTab={setActiveTab} tiles={tiles} title="Admin Dashboard" />
       
        <div className="content">
        <Header/>
        <br/>
        {activeTab === 'Dashboard' && <DashBoardDriver />}
        {activeTab === 'Order History' && <OrderCompleted Orders={Orders}/>}

        {activeTab === 'Settings' && <div>Settings Content</div>}
        {activeTab === 'Logout' && <div>Logout Content</div>}
      </div>
    </div>
    )
}