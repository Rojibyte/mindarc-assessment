const Accordion = ({ data, isActive, setActive }: any) => {
  return (
    <>
      {data.map((tab, index) => {
        return (
          <div key={index} className="border border-black/10">
            <button
              className={`py-2 border-b-2 transition-colors duration-300 w-full ${
                index === isActive
                  ? "text-teal-500"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActive(index)}
            >
              {tab.title}
            </button>
            <div
              className={`accordion-content p-5 ${
                index === isActive ? "active" : "hidden"
              }`}
              dangerouslySetInnerHTML={{
                __html: data[isActive].content,
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
