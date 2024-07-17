import React from 'react';
import "D:/internship-project/src/css/user/homePage.css";

import ExclusiveDeals from './serviceProviderDetai';
import Footer from './footer';
import TitleBox from './titleBox';
import UserHeader from './userHeader';


export default function HomePage({userId}) {

    return (
        <>
        <UserHeader id={userId}/>
        <div className='homepage'>

          <TitleBox/>
          <br/>
          <br/>
      
          <h2> Service Provider </h2>
          <ExclusiveDeals discount={false}/>
          </div>
        <Footer/>
        </>
    );
}
