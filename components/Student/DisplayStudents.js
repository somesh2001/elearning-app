import React, { useEffect } from "react";
import supabase from "@/supabaseClient";
import { useState } from "react";

const DisplayStudents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    supabase
      .from("students")
      .select("*")
      .then((response) => setData(response.data));
  }, []);

  return (
    <>
      <h1 class="text-2xl font-medium text-center text-gray-800 mt-4 mb-4 border-b">
        Students Detail
      </h1>

      <table class="mx-auto text-center table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Name </th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.email}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.contact}</td>
              <td className="border px-4 py-2">{row.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DisplayStudents;
