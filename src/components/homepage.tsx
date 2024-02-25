import React from 'react';
import { HeroSimple } from "@/components/hero-simple"
import { isMobile } from 'react-device-detect';

import LazyBackgroundImage from "@/components/ui/lazy-load-image"



{/* <div className="flex flex-row items-center justify-center w-full h-[50rem]"> */ }

const HomePage = () => {
    return (
        <>
            <HeroSimple
                title="SCLERA"
                subtitle="I'm Amy. Frontend engineer writing code and blog on the internet."
            />
            


             <div className="w-full bg-rose relative flex flex-col md:flex-row items-center justify-center" style={{ minHeight: '50rem' }}>

                <LazyBackgroundImage img='https://d1d5i0xjsb5dtw.cloudfront.net/sclera/pink-background-compressed.jpg'
                                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
                                      filter='grayscale(10%) brightness(60%)'
                                      style={{backgroundAttachment: 'fixed'}}
                />
               
               {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
                    style={{
                        backgroundImage: `url('https://d1d5i0xjsb5dtw.cloudfront.net/sclera/pink-background.jpg')`,
                        backgroundSize: 'cover', // Fit the background image to cover the entire container
                        height: '100%',
                        filter: 'grayscale(10%) brightness(60%)'
                    }}>
                </div> */}

                <div className={`relative w-60 h-60 border-solid border-slate-300 ${!isMobile ? 'border-b-[0.5rem]' : 'border-r-[0.5rem]'} rounded-full p-4 drop-shadow-2xl`}>
                    <a href="website-link-goes-here" target="_blank">
                        {/* <img className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                            src="https://d1d5i0xjsb5dtw.cloudfront.net/sclera/toro.jpeg" alt="toro" /> */}
                        <LazyBackgroundImage img='https://d1d5i0xjsb5dtw.cloudfront.net/sclera/toro.jpeg'
                                      className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                        />
                    </a>
                </div>

                <div className={`relative w-60 h-60 border-solid border-zinc-300 ${!isMobile ? 'border-t-[0.5rem]' : 'border-l-[0.5rem]'} rounded-full p-4 drop-shadow-2xl` }>
                    <a href="website-link-goes-here" target="_blank">
                        {/* <img className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                            src="https://d1d5i0xjsb5dtw.cloudfront.net/sclera/techo.jpeg" alt="techo" /> */}
                        <LazyBackgroundImage img='https://d1d5i0xjsb5dtw.cloudfront.net/sclera/techo.jpeg'
                                      className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                        />
                    </a>
                </div>

                <div className={`relative w-60 h-60 border-solid border-neutral-400 ${!isMobile ? 'border-b-[0.5rem]' : 'border-r-[0.5rem]'} rounded-full p-4 drop-shadow-2xl`}>
                    <a href="website-link-goes-here" target="_blank">
                        {/* <img className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                            src="https://d1d5i0xjsb5dtw.cloudfront.net/sclera/manos.jpeg" alt="manos" /> */}
                        <LazyBackgroundImage img='https://d1d5i0xjsb5dtw.cloudfront.net/sclera/manos.jpeg'
                                      className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                        />
                    </a>
                </div>

                <div className={`relative w-60 h-60 border-solid border-pink-100 ${!isMobile ? 'border-t-[0.5rem]' : 'border-l-[0.5rem]'} rounded-full p-4 drop-shadow-2xl` }>
                    <a href="website-link-goes-here" target="_blank">
                        {/* <img className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                            src="https://d1d5i0xjsb5dtw.cloudfront.net/sclera/sacerdote.jpeg" alt="sacerdote" /> */}
                        <LazyBackgroundImage img='https://d1d5i0xjsb5dtw.cloudfront.net/sclera/sacerdote.jpeg'
                                      className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                        />
                    </a>
                </div>

                <div className={`relative w-60 h-60 border-solid border-pink-200 ${!isMobile ? 'border-b-[0.5rem]' : 'border-r-[0.5rem]'} rounded-full p-4 drop-shadow-2xl`}>
                    <a href="website-link-goes-here" target="_blank">
                        {/* <img className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                            src="https://d1d5i0xjsb5dtw.cloudfront.net/sclera/libertad_francia.jpeg" alt="libertad-francia" /> */}
                        <LazyBackgroundImage img='https://d1d5i0xjsb5dtw.cloudfront.net/sclera/libertad_francia.jpeg'
                                      className="rounded-full object-cover w-full h-full drop-shadow-2xl"
                        />
                    </a>
                </div>
            </div>
        </>
    )
};

export default HomePage;
