import React, { useState } from "react";

type Props = {
  img: string;
  children?: JSX.Element[] | JSX.Element;
  style?: React.CSSProperties;
  className?: string;
  filter?: string;
};


export default function LazyBackgroundImage({ img, children, style, className, filter }: Props) {

     const [loaded, setLoaded] = useState(false);

     const handleLoad = () => {
       setLoaded(true);
     };

     console.log(loaded)

    
  return (
    <div
      className= {className}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        filter: loaded ? filter : "blur(20px)",
        transition: "filter 0.5s",
        ...style,
      }}
    >
      <img src={img} alt="" onLoad={handleLoad} style={{ display: "none" }} />
      {loaded && children}
    </div>
  );
}