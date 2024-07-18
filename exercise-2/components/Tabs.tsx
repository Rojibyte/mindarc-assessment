const Tabs = ({ data, isActive, setActive }: any) => {
  return (
    <>
      <div className="flex space-x-5 border-b flex-row">
        {data.map((tab, index) => {
          return (
            <button
              key={index}
              className={`py-2 border-b-4 transition-colors duration-300 ${
                index === isActive
                  ? "border-teal-500"
                  : "border-transparent hover:border-gray-300"
              }`}
              // Change the active tab on click.
              onClick={() => setActive(index)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      <div className="py-4 w-full">
        <div dangerouslySetInnerHTML={{ __html: data[isActive].content }} />
      </div>
    </>
  );
};

export default Tabs;
