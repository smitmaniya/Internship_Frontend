import Header from "../serviceProvider/header";
import GoLive from "./goLive";
import StatBoxDriver from "./stateBoxDriver";

export default function DashBoardDriver(){
  
        return (
            <div>
                <Header/>
                <br/>

                <h1>DashBoard</h1>
                <br/>
                <StatBoxDriver/>
                <br/>
                <GoLive/>
                
            </div>
        )
    

}