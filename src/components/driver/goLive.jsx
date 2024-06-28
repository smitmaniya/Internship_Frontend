import NewOrder from "./NewOrder";

export default function GoLive(){
    const newOrder = [
        { Name: "Cloth Washing", date: "04 Sep 2019",price: "$5", Total_item: 12, Address: "1499, pope st, LaSalle, Ontario", status: "Pending" },
        { Name: "Cloth Washing", date: "04 Sep 2019",price: "$5",Total_item: 12, Address: "1499, pope st, LaSalle, Ontario", status: "Pending" },
        { Name: "Cloth Washing", date: "04 Sep 2019",price: "$5",Total_item: 12, Address: "1499, pope st, LaSalle, Ontario", status: "Pending" },
        { Name: "Cloth Washing", date: "04 Sep 2019",price: "$5",Total_item: 12, Address: "1499, pope st, LaSalle, Ontario", status: "Pending" },
    ];
    return(
        <div>
            {/* <h2>Go Live to View New Order</h2>
            <button className="goLive">Go Live</button>
            <br/>
            <br/> */}
            <NewOrder Orders={newOrder}/>
        </div>
    )
}