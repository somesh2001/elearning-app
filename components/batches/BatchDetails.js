import Link from "next/link";

import { useState } from "react";

const BatchDetails = () => {
  const [showUserList, setshowUserList] = useState(false);

  const closeList = () => {
    setshowUserList(false);
  };
  const openList = () => {
    setshowUserList(true);
  };

  return (
    <div className="mt-10 sm:mt-20 mb-5">
      <div className="md:grid md:grid-cols-4 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="overflow-hidden shadow ml-10 sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-4 gap-4 mb-5 ">
                <div class="col-span-3 ">
                  <h3 className=" text-2xl   font-medium leading-6 text-gray-700 mb-4 ">
                    Batch Details
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                  <div className="flex  text-sm font-medium text-gray-700 ">
                    <span className="mt-1 font-normal w-2/5   ">
                      Batch Name{" "}
                    </span>
                    <span id="" className="mt-1 ml-10 font-semibold w-3/5  ">
                      Abc
                    </span>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                  <div className="flex  text-sm font-medium text-gray-700">
                    <span className="mt-1 font-normal w-2/5   ">
                      Book Name{" "}
                    </span>
                    <span id="" className="mt-1 ml-10 font-semibold w-3/5  ">
                      Abc
                    </span>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 shadow-sm p-2 ">
                  <div className="flex  text-sm font-medium text-gray-700">
                    <span className="mt-1 font-normal w-2/5   ">
                      Batch Type{" "}
                    </span>
                    <span id="" className="mt-1 ml-10 font-semibold w-3/5  ">
                      Kid
                    </span>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                  <div className="flex  text-sm font-medium text-gray-700">
                    <span className="mt-1 font-normal w-2/5   ">
                      Teacher Name{" "}
                    </span>
                    <span id="" className="mt-1 ml-5 font-semibold w-3/5  ">
                      {" "}
                      <img
                        class="inline-block h-6 w-6 mx-3 rounded-full ring-2 ring-white"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                      
                      />
                      Abc
                    </span>
                  </div>
                </div>
              </div>

              
            </div>
            {/* <p className="text-red-400">Error </p> */}
          </div>
          <div className="overflow-hidden shadow ml-10 mt-5 sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-4 gap-4 mb-5 ">
                <div class="col-span-3 ">
                  <h3 className=" text-2xl   font-medium leading-6 text-gray-700 mb-4 ">
                    Batch Shedule
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                  <div className="flex  text-sm font-medium text-gray-700 ">
                    <span className="mt-1 font-semibold w-2/6   ">
                      Daily On{" "}
                    </span>
                    <span id="" className="mt-1 ml-10 font-semibold w-2/6  ">
                      Timeing for a Day
                    </span>
                    <span id="" className="mt-1 ml-10 font-semibold w-2/6  ">
                      Date
                    </span>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                  <div className="flex  text-sm font-medium text-gray-700 ">
                    <span className="mt-1 font-semibold w-2/6   ">
                      Monday to Friday{" "}
                    </span>
                    <span id="" className="mt-1 ml-10 font-semibold w-2/6  ">
                      9am to 11am
                    </span>
                    <span id="" className="mt-1 ml-10 font-semibold w-2/6  ">
                      12 feb to 16 may
                    </span>
                  </div>
                </div>
                
                
              </div>

              
            </div>
            {/* <p className="text-red-400">Error </p> */}
          </div>
          
        </div>
        {/* Second */}
        {showUserList && (
          <div className="md:col-span-2 bg-white mr-10 shadow sm:rounded-md">
            <div className="items-center justify-center ">
              <div class="grid grid-cols-4 gap-4  mb-5 ">
                <div class="col-span-3 ">
                  <h3 className=" text-2xl p-4  font-medium leading-6 text-gray-700 mb-4 ">
                    Add Student List
                  </h3>
                </div>
                <div class="align-end">
                  <button
                    onClick={closeList}
                    className="inline-flex justify-center m-2 rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="font-bold px-1 "> X </span>
                  </button>
                </div>
              </div>
              <div className="m-2">
                <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
                  <span className="mt-1 font-normal w-4/5  ">
                    <img
                      class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    />
                    Studen Name
                  </span>
                  <span id="" className="mt-1 ml-10 font-semibold w-1/5  ">
                    {" "}
                    <button
                    onClick={openList}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="font-bold px-1 "> + </span>
                  </button>
                  </span>
                </div>
              </div>
              <div className="m-2">
                <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
                  <span className="mt-1 font-normal w-4/5  ">
                    <img
                      class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    />
                    Studen Name
                  </span>
                  <span id="" className="mt-1 ml-10 font-semibold w-1/5  ">
                    {" "}
                    <button
                    onClick={openList}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="font-bold px-1 "> + </span>
                  </button>
                  </span>
                </div>
              </div>
              <div className="m-2">
                <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
                  <span className="mt-1 font-normal w-4/5  ">
                    <img
                      class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    />
                    Studen Name
                  </span>
                  <span id="" className="mt-1 ml-10 font-semibold w-1/5  ">
                    {" "}
                    <button
                    onClick={openList}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="font-bold px-1 "> + </span>
                  </button>
                  </span>
                </div>
              </div>
             
             
            </div>
          </div>
        )}
        {!showUserList && (
          <div className="md:col-span-2 bg-white mr-10 shadow sm:rounded-md">
            <div className="items-center justify-center ">
              <div class="grid grid-cols-4 gap-4  mb-5 ">
                <div class="col-span-3 ">
                  <h3 className=" text-2xl p-4  font-medium leading-6 text-gray-700 mb-4 ">
                    Student List
                  </h3>
                </div>
                <div class="align-end">
                  <button
                    onClick={openList}
                    className="inline-flex justify-center m-2 rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="font-bold px-1 "> + </span>
                  </button>
                </div>
              </div>
              <div className="m-2">
                <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
                  <span className="mt-1 font-normal w-4/5  ">
                    <img
                      class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    />
                    Studen Name
                  </span>
                  <span id="" className="mt-1 ml-10 font-semibold w-2/5  ">
                    {" "}
                    <button className="mr-auto ml-5 text-blue-500 hover:text-blue-700  px-2 font-normal ">
                      View
                    </button>
                    <button className="mr-auto  text-red-500 px-2 hover:text-red-700   font-normal ">
                      Remove
                    </button>
                  </span>
                </div>
              </div>
              <div className="m-2">
                <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
                  <span className="mt-1 font-normal w-4/5  ">
                    <img
                      class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    />
                    Studen Name
                  </span>
                  <span id="" className="mt-1 ml-10 font-semibold w-2/5  ">
                    {" "}
                    <button className="mr-auto ml-5 text-blue-500 hover:text-blue-700  px-2 font-normal ">
                      View
                    </button>
                    <button className="mr-auto  text-red-500 px-2 hover:text-red-700   font-normal ">
                      Remove
                    </button>
                  </span>
                </div>
              </div>
              <div className="m-2">
                <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
                  <span className="mt-1 font-normal w-4/5  ">
                    <img
                      class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                    />
                    Studen Name
                  </span>
                  <span id="" className="mt-1 ml-10 font-semibold w-2/5  ">
                    {" "}
                    <button className="mr-auto ml-5 text-blue-500 hover:text-blue-700  px-2 font-normal ">
                      View
                    </button>
                    <button className="mr-auto  text-red-500 px-2 hover:text-red-700   font-normal ">
                      Remove
                    </button>
                  </span>
                </div>
              </div>
              

              <div class="align-end m-2"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchDetails;
