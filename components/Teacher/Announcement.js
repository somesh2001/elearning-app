import React from 'react'

const Announcement = () => {
  return (
    <>
    <div className="mt-10 sm:mt-20 bg-gray-50">
      <div className="md:grid md:grid-cols-4 md:gap-6">
        
        <div className="mt-5 md:col-span-2 md:mt-0">
          {/* <form onSubmit={onBatchCreateHandler}> */}
            <div className="overflow-hidden shadow sm:rounded-md md:mx-5">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6 ">
                  <div className="col-span-6">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-4">
                        <h3>Announcement</h3>
                        <label
                          htmlFor="batch-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="batch-name"
                          id="first-name"
                        //   ref={nameRef}
                        //   autoComplete="given-name"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-4">
                        <label
                          htmlFor="book-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Discroption
                        </label>
                        <input
                          type="text"
                          name="book-name"
                          id="book-name"
                        //   ref={bookNameRef}
                          required
                        //   autoComplete="given-name"
                          className="mt-1 block w-full h-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 items-center">
                <button
                  type="submit"
                  className="inline-flex justify-center w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Make Announcement
                </button>
              </div>
            </div>
          {/* </form> */}
        </div>
        <div className="md:col-span-2 shadow-md ">
          <div className="px-4 items-center justify-center  mt-44 pl-12">
            <h2 className=" text-3xl  font-medium leading-6 text-gray-800 mb-4 ">
              Announcement
            </h2>
            <p className="mt-1 text-sms text-gray-600">
              Announcement Card
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Announcement