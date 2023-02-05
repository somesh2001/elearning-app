import Link from "next/link";
import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const StudentListCardTeacher = ({ email, type, batch, enrollStudents, click }) => {


  
  return (
    <>
      
        <div className="m-2">
          <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
            <span className="mt-1 font-normal w-4/5  ">
              <img
                class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              />
              Student 
            </span>
            <span id="" className="mt-1 ml-10 font-semibold w-2/5  ">
              {" "}
              {/* <button
                // onClick={studentProfile}
                className="mr-auto ml-5 text-gra-500 hover:text-blue-700  px-2 font-normal "
              >
                View
              </button> */}
              <span
                // onClick={removeStudentFromBatch}
                className="mr-auto  text-red-500 p-2  border border-red-500 rounded-sm hover:text-red-700   font-normal "
              >
                Joined
              </span>
              <input type="checkbox" name="joined" id="" className="m-2" />
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
              Student 
            </span>
            <span id="" className="mt-1 ml-10 font-semibold w-2/5  ">
              {" "}
              {/* <button
                // onClick={studentProfile}
                className="mr-auto ml-5 text-gra-500 hover:text-blue-700  px-2 font-normal "
              >
                View
              </button> */}
              <span
                // onClick={removeStudentFromBatch}
                className="mr-auto  text-gray-500 p-2   hover:text-gray-700   font-normal "
              >
                Absent
              </span>
              <input type="checkbox" name="joined" id="" className="m-2" />
            </span>
          </div>
        </div>
      
 
        {/* <div className="m-2">
          <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
            <span className="mt-1 font-normal w-4/5  ">
              <img
                class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              />
              Email
            </span>
            <span
                // onClick={removeStudentFromBatch}
                className="mr-auto  text-gray-500 p-2   hover:text-gray-700   font-normal "
              >
                Apsent
              </span>
              <input type="checkbox" name="joined" id="" className="m-2" />
            {/* <span id="" className="mt-1 ml-2 font-semibold ">
               <span className=" text-red-500">Enrolled</span>
            </span> */}
            {/* <span id="" className="mt-1 ml-2 font-semibold  ">
           
                <button
                  // onClick={addStudentToBatch}
                  className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                   <span className="font-bold px-1 "> + </span>
                   <p>Added &#10003;</p>
                </button>
            
            </span> */}
          {/* </div>
        </div>  */}
      
      
    </>
  );
};

export default StudentListCardTeacher;


// Method 2


// import Link from "next/link";
// import supabase from "@/supabaseClient";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// const StudentListCard = ({ email, type, batch, enrollStudents, click }) => {
//   const router = useRouter();

//   const [added, setAdded] = useState(false);
//   const [present, setPresent] = useState(false);

//   // let present = enrollStudents.find((batch) => batch.student_id === email);
//   // let present = enrollStudents.find((batch) => batch.student_id === email);

//   const studentProfile = () => {
//     router.push(`admin/${email}/students`);
//   };

//   const addStudentToBatch = async () => {
//     const { data, error } = await supabase
//       .from("batch_student_relation")
//       .insert({ student_id: email, batch_id: batch })
//       .select();
//     setAdded(true);
//     click(true);
//   };

//   const removeStudentFromBatch = async () => {
//     console.log("removed");
//     const { data, error } = await supabase
//       .from("batch_student_relation")
//       .delete()
//       .match({ student_id: email, batch_id: batch });

//     if (error) {
//       console.log(error);
//     }
//     click(true);
//   };

//   return (
//     <>
//       {type === "addedStudents" && (
//         <div className="m-2">
//           <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
//             <span className="mt-1 font-normal w-4/5  ">
//               <img
//                 class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
//                 src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
//               />
//               {email}
//             </span>
//             <span id="" className="mt-1 ml-10 font-semibold w-2/5  ">
//               {" "}
//               <button
//                 onClick={studentProfile}
//                 className="mr-auto ml-5 text-blue-500 hover:text-blue-700  px-2 font-normal "
//               >
//                 View
//               </button>
//               <button
//                 onClick={removeStudentFromBatch}
//                 className="mr-auto  text-red-500 px-2 hover:text-red-700   font-normal "
//               >
//                 Remove
//               </button>
//             </span>
//           </div>
//         </div>
//       )}
//       {type !== "addedStudents" && (
//         <div className="m-2">
//           <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
//             <span className="mt-1 font-normal w-4/5  ">
//               <img
//                 class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
//                 src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
//               />
//               {email}
//             </span>
//             <span id="" className="mt-1 ml-2 font-semibold ">
//               {present && <span className=" text-red-500">Enrolled</span>}
//             </span>
//             <span id="" className="mt-1 ml-2 font-semibold  ">
//               {!present && (
//                 <button
//                   onClick={addStudentToBatch}
//                   className="inline-flex justify-center rounded-md border border-transparent bg-green-700 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   {!added && <span className="font-bold px-1 "> + </span>}
//                   {added && <p>Added &#10003;</p>}
//                 </button>
//               )}
//             </span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default StudentListCard;

