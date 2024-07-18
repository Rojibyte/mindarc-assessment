import React from "react";

export default function Cards() {
  return (
    <section
      id="cards"
      className="flex flex-row flex-wrap justify-center gap-10 my-10 text-center"
    >
      <div className="flex flex-col items-center w-[300px] p-5 border border-black/10 rounded-lg shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)]">
        <img
          src="https://via.placeholder.com/400x300"
          alt="placeholder image"
          className="rounded"npm 
        />
        <p className="my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a
          href="#"
          className="flex-none uppercase tracking-[3px] font-bold border-[3px] border-black py-2 px-4 rounded-full"
        >
          read more
        </a>
      </div>
      <div className="flex flex-col items-center w-[300px] p-5 border border-black/10 rounded-lg shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)]">
        <img
          src="https://via.placeholder.com/400x300"
          alt="placeholder image"
          className="rounded"
        />
        <p className="my-5 grow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a
          href="#"
          className="inline-block uppercase tracking-[3px] font-bold border-[3px] border-black py-2 px-4 rounded-full"
        >
          read more
        </a>
      </div>
      <div className="flex flex-col items-center w-[300px] p-5 border border-black/10 rounded-lg shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)]">
        <img
          src="https://via.placeholder.com/400x300"
          alt="placeholder image"
          className="rounded"
        />
        <p className="my-5 grow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
        <a
          href="#"
          className="inline-block uppercase tracking-[3px] font-bold border-[3px] border-black py-2 px-4 rounded-full"
        >
          read more
        </a>
      </div>
    </section>
  );
}
