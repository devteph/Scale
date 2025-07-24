import React from 'react';
import Image from 'next/image';

export function ImageBackgroundText({ imageSrc, text1, text2 }) {
  return (
    <div className="relative">
      <div className="h-[36.875rem] wide:h-screen z-10">
        <Image
          src={imageSrc}
          alt="Background"
          width={165}
          height={30}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="px-7.5 wide:px-10 py-14 wide:py-40 absolute top-0 left-0">
        <div className="grid grid-cols-5 wide:grid-cols-12 gap-7.5 wide:gap-10">
          <div className="col-span-5 wide:col-start-7 wide:col-span-6 space-y-7.5">
            <p className="text-16 wide:text-18 text-white z-20">
              {text1}
            </p>
            <p className="text-16 wide:text-18 text-white z-20">
              {text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageBackgroundText;

