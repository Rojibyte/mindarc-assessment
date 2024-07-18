import { act, useState } from "react";

const Accordion = ({ data, isActive, setActive, toggle }: any) => {
  console.log(isActive);
  return (
    <>
      {data.map((tab, index) => {
        return (
          <div
            key={index}
            className={`accordion-group border border-black/10 ${
              index === isActive ? "active" : "hide"
            }`}
          >
            <button
              className={`py-2 border-b-2 transition-colors duration-300 w-full ${
                index === isActive
                  ? "text-teal-500"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => {
                toggle(index);
              }}
            >
              {tab.title}
            </button>
            {index === isActive && (
              <div
                className={`accordion-content p-5 `}
                dangerouslySetInnerHTML={{
                  __html: data[isActive].content,
                }}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
