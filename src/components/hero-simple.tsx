import * as React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
}

export function HeroSimple({ title, subtitle }: HeroProps) {

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
    <div className="w-full bg-white bg-cover bg-no-repeat bg-center relative flex flex-col items-center justify-start text-center"  
    style={{ 
      height: '40rem', // Default height
      backgroundImage: `url('https://a.travel-assets.com/findyours-php/viewfinder/images/res40/481000/481869-Place-De-La-Bourse.jpg')`
    }}>

    <div className="flex justify-start">
      <h1 
        className="font-tapestry gradient-text pt-8 mb-2 text-5_xl sm:text-6_xl md:text-13_xl lg:text-15_xl xl:text-20xl font-bold leading-tight tracking-tight"
        style={{ transform: `scale(${scale})`, opacity: opacity }}
      >
        {title}
      </h1>
    </div>
    </div>
  );
}
