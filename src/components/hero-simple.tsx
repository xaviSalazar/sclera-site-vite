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

<div className="w-full bg-white relative flex flex-col items-center justify-start text-center" style={{ minHeight: '20rem', maxHeight: '80vh' }}>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" 
        style={{ 
            backgroundImage: `url('https://d1d5i0xjsb5dtw.cloudfront.net/sclera/venetian-hotel.jpg')`, 
            backgroundSize: 'cover', // Fit the background image to cover the entire container
            height: '100%',
            filter: 'grayscale(65%) brightness(80%)' 
        }}>
    </div>
    <div className="flex justify-start">
        <h1 
            className="custom-title gradient-text pt-[9rem] mb-2 text-5_xl sm:text-6_xl md:text-13_xl lg:text-15_xl xl:text-20_custom"
            style={{ transform: `scale(${scale})`, opacity: opacity }}
        >
            {title}
        </h1>
    </div>
</div>


  );
}
