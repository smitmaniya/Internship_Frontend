import Header from "./header";
import NewOrderList from "./orderList";
import StatBox from "./statisticBox";

const orders = [
    { orderId: '#AHGA68', date: '23/09/2022', name: 'Jacob Marcus', time: '2:00 pm', amount: '$3400.00', address: '342 Oron road, Uyo' , status:"Active"},
    { orderId: '#AHGA68', date: '23/09/2022', name: 'Jacob Marcus', time: '2:00 pm', amount: '$3400.00', address: '342 Oron road, Uyo' , status:"Pending"},
    { orderId: '#AHGA68', date: '23/09/2022', name: 'Jacob Marcus', time: '2:00 pm', amount: '$3400.00', address: '342 Oron road, Uyo' , status:"Completed"}
];

export default function DashBoard() {
    return (
        <div>
            <Header/>
            <br/>
            <h1>DashBoard</h1>
            <br/>
            <StatBox/>
            <br/>
            <NewOrderList users={orders}/>
        </div>
    )
}