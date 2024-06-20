import React from 'react';
import "D:/internship-project/src/css/user/homePage.css";

import ExclusiveDeals from './serviceProviderDetai';
import Footer from './footer';
import TitleBox from './titleBox';
import UserHeader from './userHeader';


export default function HomePage() {
    return (
        <>
        <UserHeader/>
        <div className='homepage'>
          <TitleBox/>
          <br/>
          <br/>
          <h2> Exclusive Deal </h2>
          <ExclusiveDeals discount={true}/>
          <h2> Popular Service Provider </h2>
          <ExclusiveDeals discount={false}/>
          </div>
        <Footer/>
        </>
    );
}
