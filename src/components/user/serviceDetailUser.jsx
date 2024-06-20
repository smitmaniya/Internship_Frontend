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
        <ServiceView/>
        <CustomerReviews/>
        <br/>
        <ServiceInformation/>
        <Footer/>
        </>

    )
}