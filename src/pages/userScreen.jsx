import HomePage from "../components/user/homePage";
import { useParams } from 'react-router-dom';

export default function UserScreen(){
    const { id } = useParams();
    return(
        <>
        <HomePage userId={id}/>
        </>
    )
}