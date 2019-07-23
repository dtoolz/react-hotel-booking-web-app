import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"


export default function Home() {
    return (
        // empty angle brackets same as React.Fragment
        <> 
        <Hero>
            <Banner title="Quality Rooms" subtitle="Deluxe Rooms starts at $150 minimum" >
               <Link to="/rooms" className="btn-primary">
                 Available Rooms
               </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms />
        </>
    )
}


// to be imported to appjs