import React from 'react';
import { Navigation } from "@/components/navigation"
import Footer from "@/components/footer"
import {HeroSimple} from "@/components/hero-simple"



const RootLayout = () => {
    return (
    <div className="flex flex-col w-full sm:pt-[4rem]">

            <Navigation />
            <HeroSimple
                title="SCLERA"
                subtitle="I'm Amy. Frontend engineer writing code and blog on the internet."
            />
            <HeroSimple
                title="SCLERA"
                subtitle="I'm Amy. Frontend engineer writing code and blog on the internet."
            />
            <HeroSimple
                title="SCLERA"
                subtitle="I'm Amy. Frontend engineer writing code and blog on the internet."
            />
              <Footer />
    </div>
    )
};

export default RootLayout;
