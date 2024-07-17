import ServiceInformation from "./serviceInformation";
import ServiceView from "./servicelistview";
import UserHeader from "./userHeader";
import Footer from "./footer";
import CustomerReviews from "./userReview";
import ServiceProviderUserBox from "./serviceProviderUserBox";
import { useParams } from 'react-router-dom';


export default function ServiceDetails(){
    const { serviceProviderId } = useParams();
    return(
        <>
        <UserHeader/>
        <ServiceProviderUserBox/>
        <div style={{marginLeft:"20px"}}>
        <ServiceView serviceProviderId={serviceProviderId}/>
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