import React from "react";

export default function Banner() {
  return (
    <div className="flex w-full text-center text-white flex-wrap flex-col items-center justify-center sm:h-[650px] h-[600px]">
      <picture className="absolute brightness-[.65] -z-[1]">
        <source
          media="(min-width:650px)"
          srcSet="https://via.placeholder.com/1920x650"
          className="w-full object-cover"
        ></source>
        <img
          src="https://via.placeholder.com/600x600"
          alt=""
          className="w-full sm:h-[650px] h-[600px] object-cover"
        />
      </picture>
      <h1 className="font-bold text-[55px] mb-2">Hello Developer!</h1>
      <h2 className="text-3xl tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  );
}
