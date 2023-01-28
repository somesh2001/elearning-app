import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const AddStudentTeacher = () => {
  const router = useRouter();
  const path = router.pathname;
  const user = path === "/admin/add-student" ? "student" : "instructor";

  const emailRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    //getting the values
    const enteredEmailValue = emailRef.current.value;

    //NOTE-->inviteUserByEmail this method is not working as we wanted(unable to redirect the email)
    // const { data, error } = await supabase.auth.admin.inviteUserByEmail(
    //   enteredEmailValue,
    //   {
    //     options: {
    //       emailRedirectTo: "http://localhost:3000/studentaccount",
    //     },
    //   }
    // );

    //NOTE-> as a alternative to the above method we are using this method to add the user.

    const { data, error } = await supabase.auth.signUp({
      email: enteredEmailValue,
      password: "hjkjhk@345435dfjgA__DioiOOPP45666$KKlop_O",
      options: {
        emailRedirectTo:
          user === "student"
            ? "http://localhost:3000/studentaccount"
            : "http://localhost:3000/teacheraccount",
      },
    });

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);

    //after user validation happens
    router.push("/admin");
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Add New {user} To Your Organization
          </h2>
        </div>
        <form onSubmit={submitHandler} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                ref={emailRef}
                required
                className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm mt-4 mb-4"
                placeholder="Email address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-indigo-600 hover:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-indigo-500 mt-4 mb-4"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Add {user}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentTeacher;

// const { data, error } = await supabase.auth.signUp({
//   email: enteredEmailValue,
//   password: enteredPasswordValue,
//   options: {
//     data: {
//       first_name: enteredName,
//       contact: enteredContact,
//       type: path === "/admin/add-student" ? "student" : "instructor",
//     },
//   },
// });
