import React from "react";

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-100">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">
        {data.title}
      </h2>
      <p className="text-sm mt-2 text-gray-100">  </p>
        {data.description}
        <div className="mt-4">
            <button>Accept Task</button>
        </div>
    
    </div>
  );
};

export default NewTask;
