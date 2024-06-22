import ServiceInformation from "./serviceInformation";
import ServiceView from "./servicelistview";
import UserHeader from "./userHeader";
import Footer from "./footer";
import CustomerReviews from "./userReview";
import ServiceProviderUserBox from "./serviceProviderUserBox";


export default function ServiceDetails(){
    return(
        <>
        <UserHeader/>
        <ServiceProviderUserBox/>
        <div style={{marginLeft:"20px"}}>
        <ServiceView/>
        <ServiceInformation/>
        <br/>
        <br/>
        </div>
        <br/>
        <CustomerReviews/>
        <Footer/>
        </>

    )
}