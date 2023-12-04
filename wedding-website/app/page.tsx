"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true)
    setTimeout(() => setImageLoaded(true), 600)
  }, []);
  const opacityAndTranslateImage = loaded ? "translate-y-8 opacity-100" : "opacity-0";
  const opacityAndTranslateText = imageLoaded ? "translate-y-10 opacity-100" : "opacity-0";
  return (
    <main className="flex flex-col h-screen w-screen justify-center">
      <div className="flex flex-col items-center h-5/6 justify-center">
        <div className={`flex justify-center w-screen h-full ${opacityAndTranslateImage} transition duration-1000 ease-in-out`}>
            <Image
              src="/save-the-date.jpeg"
              alt="Would you rather fight 100 duck sized horses or one horse sized duck?"
              quality={100}
              fill={true}
              objectFit='contain'
            />
        </div>
        {/* <div className="flex text-white mt-10 font-sans">
          <p className={`text-3xl ${opacityAndTranslateText} transition duration-1000 ease-in-out`}>
            Invitations to follow
          </p>
        </div> */}
      </div>
      <div className="h-16" />
    </main>
  );
}
