"use client"

import React from 'react'
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CampaignSection from '../components/Campaign';


const page = () => {
  return (
    <>
  <Header></Header>
          
          <CampaignSection/>
          <CampaignSection/>
          <CampaignSection/>
          <CampaignSection/>   
    
          <Footer></Footer>      
 </>
  )
}

export default page