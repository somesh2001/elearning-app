import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const AddUserTeacher = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <div style={{ marginTop: "-8rem" }}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg shadow-md p-6 m-4">
            <h2 className="text-2xl font-medium mb-2">Add Students</h2>
            <p className="text-gray-600">
              Add new students to your organization
            </p>
            <div className="flex items-center mt-4">
              <div>
                <Link
                  href="/admin/add-student"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
                >
                  Add Students
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 m-4">
            <h2 className="text-2xl font-medium mb-2">Add Instructor</h2>
            <p className="text-gray-600">
              Add new students to your organization
            </p>
            <div className="flex items-center mt-4">
              <div>
                <Link
                  href="/admin/add-teacher"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
                >
                  Add Instructor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserTeacher;
