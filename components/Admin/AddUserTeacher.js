import React from "react";
import Link from "next/link";

const AddUserTeacher = () => {
  return (
    <>
      <div style={{ marginTop: "-8rem" }}>
        <div class="flex justify-center items-center h-screen">
          <div class="bg-white rounded-lg shadow-md p-6 m-4">
            <h2 class="text-2xl font-medium mb-2">Add Students</h2>
            <p class="text-gray-600">Add new students to your organization</p>
            <div class="flex items-center mt-4">
              <div>
                <Link
                  href="/add-student"
                  class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
                >
                  Add Students
                </Link>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 m-4">
            <h2 class="text-2xl font-medium mb-2">Add Instructor</h2>
            <p class="text-gray-600">Add new students to your organization</p>
            <div class="flex items-center mt-4">
              <div>
                <Link
                  href="/add-teacher"
                  class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
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
