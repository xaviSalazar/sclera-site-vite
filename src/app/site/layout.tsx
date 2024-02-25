import React from 'react';
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import HomePage from "@/components/homepage"


const RootLayout = () => {
    return (
    <div className="flex flex-col w-full sm:pt-[0rem]">
            <Navigation />
            <HomePage />
              <Footer />
    </div>
    )
};

export default RootLayout;
