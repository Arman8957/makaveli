import React from 'react';
import Image from 'next/image';
//import Makaveli from '../public/makaImage/makaveliImage';

const FrontPa = () => {
  return (
    <div className="h-screen bg-white">
     <div className="w-full h-[50%] sm:h-[90%] ">

      <img src="/makaImage/Frame3.png" alt="imge"  className=" w-full h-full "/>
      {/* <Image 
        src="/makaImage/makaveliImage.jpg"
     
        alt="Image"
        width="500"
        height="200" 
      /> */}
      </div>
      <div className="flex justify-center bg-white text-center text-4xl  text-drop-shadow-xl brightness-100  p-4 ">
      <img src="/makaImage/cpyImage.png" / >
      <div className="font-serif bg-white text-center text-4xl  text-drop-shadow-xl brightness-100  p-4"> Makaveli Record</div>
      </div>
    </div>
  );
};

export default FrontPa;
