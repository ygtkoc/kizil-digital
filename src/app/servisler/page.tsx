"use client"

import React from 'react'
import Link from 'next/link';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CampaignSection from '../components/CampaignSection';


const page = () => {
  return (
    <>
  <Header></Header>
          
          <CampaignSection/>
          <CampaignSection/>
          <CampaignSection/>
          <CampaignSection/>   
    
 </>
  )
}

export default page