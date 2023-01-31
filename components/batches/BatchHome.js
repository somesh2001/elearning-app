import Link from "next/link";
import Card from "../layout/Card";
import Navigation from "../layout/Navigation";

const BatchHome = () => {
  return (
    <>
      <Navigation />
      <div style={{ marginTop: "-8rem" }}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg shadow-md p-2 m-4 h-60 w-64 mr-6">
            <h2 className="text-2xl font-medium mb-2 text-center mt-10">
              Create Batch
            </h2>
            <p className="text-gray-600 text-center">
              Create new batch to your organization
            </p>
            <div className="flex items-center mt-8">
              <div>
                <Link
                  href="/admin/batches/create-batch"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg ml-16"
                >
                  Create Batch
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-2 m-4 h-60 w-64">
            <h2 className="text-2xl font-medium mb-2 text-center mt-10">
              View Batches
            </h2>
            <p className="text-gray-600 text-center">
              See all batches of your organization
            </p>
            <div className="flex items-center mt-8">
              <div>
                <Link
                  href="/admin/batches/show-batches"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg ml-14"
                >
                  View Batches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchHome;
