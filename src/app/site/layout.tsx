import React from 'react';
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import { Outlet } from 'react-router-dom';


const RootLayout = () => {
    return (
    <div className="flex flex-col w-full sm:pt-[0rem]">
            <Navigation />
              <Outlet/>
            <Footer />
    </div>
    )
};

export default RootLayout;
