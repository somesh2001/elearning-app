import supabase from "@/supabaseClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CourseCard = ({ title, book }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg items-center justify-center bg-white">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">Book Name - {book}</p>

      <div className="bg-gray-100 mt-4 py-2">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-dark-purple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark-purple focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Link href="/admin/batches/batch-details">
          See Details</Link>
        </button>
      </div>
    </div>
  </div>
);
const DisplayBatches = () => {
  const [batchesList, setBatchesList] = useState([]);

  useEffect(() => {
    supabase
      .from("batches")
      .select("*")
      .then((res) => setBatchesList(res.data));
  }, []);

  return (
    <>
      <div>
        <img
          className="mx-auto h-12 w-auto mt-10"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-800">
          Manage Batches Of Your Organization
        </h2>
      </div>
      <div className="w-full h-full  bg-slate-300">
        <div className="flex flex-wrap m-4 item-center mt-12 ml-16 pb-80 pt-10">
          {batchesList.map((batch) => (
            <div className="w-1/3 p-4" key={batch.id}>
              <CourseCard title={batch.batch_name} book={batch.book_name} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default DisplayBatches;
