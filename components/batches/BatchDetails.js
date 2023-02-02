import Link from "next/link";
import React from "react";

const BatchDetails = () => {
  return (
    <div className="mt-10 sm:mt-20 mb-5">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <div className="flex  text-sm font-medium text-gray-700">
                    <span className="mt-1 font-normal w-2/5   shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      Batch Name{" "}
                    </span>
                    <span
                      id=""
                      className="mt-1 ml-10 font-semibold w-3/5  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        
                      Abc
                    </span>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="flex  text-sm font-medium text-gray-700">
                    <span className="mt-1 font-normal w-2/5   shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      Book Name{" "}
                    </span>
                    <span
                      id=""
                      className="mt-1 ml-10 font-semibold w-3/5  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      Abc
                    </span>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="flex  text-sm font-medium text-gray-700">
                    <span className="mt-1 font-normal w-2/5   shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      Batch Type{" "}
                    </span>
                    <span
                      id=""
                      className="mt-1 ml-10 font-semibold w-3/5  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      Kid
                    </span>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="flex  text-sm font-medium text-gray-700">
                    <span className="mt-1 font-normal w-2/5   shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                      Teacher Name{" "}
                    </span>
                    <span
                      id=""
                      className="mt-1 ml-10 font-semibold w-3/5  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >    <img class="inline-block h-6 w-6 mx-3 rounded-full ring-2 ring-white" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"/>
                      Abc
                    </span>
                  </div>
                </div>

               
              </div>
              <h3 className="my-5 font-semibold">Students</h3>
              <div className="grid grid-cols-8 gap-6">
              <div className="col-span-6 sm:col-span-4">
                  <div className="flex  text-sm font-medium text-gray-700">
                  <span className="mt-1 font-normal w-3/5   shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <img class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"/>
                      Studen Name
                    </span>
                    <span
                      id=""
                      className="mt-1 ml-10 font-semibold w-2/5  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >    <button className="mr-auto ml-5 bg-blue-500 hover:bg-blue-700 text-white px-2 font-normal ">View</button>
                    <button className="mr-auto  bg-red-500 px-2 hover:bg-red-700  text-white font-normal ">Delete</button> 
                    </span>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <div className="flex  text-sm font-medium text-gray-700">
                  <span className="mt-1 font-normal w-3/5   shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                  <img class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"/>
                      Studen Name
                    </span>
                    <span
                      id=""
                      className="mt-1 ml-10 font-semibold w-2/5  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >    <button className="mr-auto ml-5 bg-blue-500 hover:bg-blue-700 text-white px-2 font-normal ">View</button>
                    <button className="mr-auto  bg-red-500 px-2 hover:bg-red-700  text-white font-normal ">Delete</button> 
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
            {/* <p className="text-red-400">Error </p> */}
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 items-center">
              <Link
                href="/"
                className="inline-flex justify-center w-full rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save Changes
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 bg-gray-400">
          <div className="items-center justify-center ">
            {/* <h2 className=" text-3xl  font-medium leading-6 text-gray-700 mb-4 ">
              Batch Image
            </h2> */}
            <img src="https://www.daarulkitab.com/wp-content/uploads/2022/12/9789960986074.webp" className="w-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
