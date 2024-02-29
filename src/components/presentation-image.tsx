import * as React from "react";

import LazyBackgroundImage from "@/components/ui/lazy-load-image"
import { Button } from "@/components/ui/button"


interface HeroProps {
  title: string;
  subtitle: string;
}

export function PresentationImage({ title, subtitle }: HeroProps) {

  const [scrollY, setScrollY] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate scale and opacity based on scroll position
  // These values can be adjusted according to your needs
  const scale = Math.max(1 - scrollY / 250, 0);
  const opacity = Math.max(1 - scrollY / 250, 0);

  return (

    <div className="w-full h-screen  bg-white relative flex flex-col items-center justify-start text-center" >

      <LazyBackgroundImage img='https://d1d5i0xjsb5dtw.cloudfront.net/sclera/venetian-hotel-paint.jpg'
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
        filter='grayscale(65%) brightness(80%)'
        style={{ backgroundAttachment: 'fixed' }}
      />

      <div className="flex flex-col items-center h-full justify-start">
        <h1
          className="custom-title gradient-text pt-[9rem] mb-2 text-8-rem sm:text-6_xl md:text-13_xl lg:text-15_xl xl:text-20-rem"
          style={{ transform: `scale(${scale})`, opacity: opacity }}
        >
          {title}
        </h1>

<div className="mt-auto mb-10">
        <h1
          className="mt-auto text-white text-4xl lg:text-5xl"
          style={{ transform: `scale(1)` }}
        >
          {subtitle}
        </h1>
        <Button 
          variant="secondary"
          className="w-72 bg-white text-black"
          style={{ transform: `scale(1)` }}
        >
          Explorar
        </Button>
        </div>

      </div>
    </div>
  );
}
