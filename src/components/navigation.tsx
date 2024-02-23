import React, { useCallback, useEffect, useState } from "react";
import {cn, debounce} from '@/lib/utils'
import { Navbar } from "@/components/navbar"

export function Navigation() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    const [scrollY, setScrollY] = React.useState(0);
  
  
    // State for scale and opacity
  
    const handleScroll = useCallback(() => {
      const position = window.pageYOffset;
      setScrollY(position);
      debounce(() => {
        const currentScrollPos = window.scrollY;
  
       
  
        // Show/hide logic
        if ((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10) {
          setVisible(true);
        } else {
          setVisible(false);
        }
  
        setPrevScrollPos(currentScrollPos);
      }, 100);
    }, [prevScrollPos, setVisible]);
  

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);
  
    let opacity = Math.max((scrollY / 250), 0) - 0.330;
  
    return (
        <>
          <header
                className={cn(
                "fixed bg-white inset-x-0 -bottom-32 z-20 mx-auto mb-4 px-4 transition-all duration-1000 animate-out sm:top-0 sm:h-16 sm:px-0 sm:transition-none",
                visible && "bottom-0 animate-in",
                )}
            >

          <div className="flex items-center justify-between rounded-full border-b border-foreground/25 bg-background/95 px-3 py-2 shadow-md supports-[backdrop-filter]:bg-background/60 supports-[backdrop-filter]:bg-clip-padding supports-[backdrop-filter]:backdrop-blur sm:rounded-none sm:px-3">
          <div className="container mx-auto flex max-w-6xl justify-between"> {/* Add justify-between here */}

          <div className="flex items-center justify-center flex-grow"> {/* Center-aligned title */}
            <h1 
              className="font-tapestry text-4xl gradient-text"
              style={{ opacity: opacity }}
            >
              SCLERA
            </h1>
              
            </div>

            <div className="flex items-center gap-2">
              {/* Right-aligned elements */}
              <nav className="hidden space-x-6 text-sm font-medium sm:block">
                <Navbar />
              </nav>
              <nav className="sm:hidden">
                {/* <MobileNav /> */}
              </nav>
            </div>

          </div>
          </div>
            </header>
        </>

    );
}