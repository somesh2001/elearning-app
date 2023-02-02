import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../store/auth-context";
import supabase from "@/supabaseClient";

const CreateNewBatch = () => {
  const [error, setError] = useState("");

  const nameRef = useRef();
  const bookNameRef = useRef();
  const typeRef = useRef();
  const teacherNameRef = useRef();

  const authCtx = useContext(AuthContext);
  let options = authCtx.teachersList;

  useEffect(() => {
    supabase
      .from(`teachers`)
      .select("*")
      .then((response) => authCtx.setTeachersData(response.data));
  }, []);

  const onBatchCreateHandler = async (e) => {
    e.preventDefault();

    //getting the values
    const enteredBatchName = nameRef.current.value;
    const enteredBookName = bookNameRef.current.value;
    const enteredType = typeRef.current.value;
    const enteredTeacherEmail = teacherNameRef.current.value;

    console.log(enteredBatchName);
    console.log(enteredBookName);
    console.log(enteredType);
    console.log(enteredTeacherEmail);

    //Inserting the Student data into student table

    const { data1, errorTable } = await supabase
      .from("batches")
      .insert({
        batch_name: enteredBatchName,
        teacher_email: enteredTeacherEmail,
        type: enteredType,
        book_name: enteredBookName,
      })
      .select();

    if (errorTable) {
      setError("Teacher already added to the selected");
      console.log(errorTable);
      return;
    }
  };

  return (
    <>
      <div className="mt-10 sm:mt-20">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 bg-gray-400">
            <div className="px-4 items-center justify-center  mt-44 pl-12">
              <h2 className=" text-3xl  font-medium leading-6 text-gray-700 mb-4 ">
                Create Batch
              </h2>
              <p className="mt-1 text-sms text-gray-600">
                Enter the details to create a new batch
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={onBatchCreateHandler}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="batch-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Batch name
                      </label>
                      <input
                        type="text"
                        name="batch-name"
                        id="first-name"
                        ref={nameRef}
                        autoComplete="given-name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="book-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Book name
                      </label>
                      <input
                        type="text"
                        name="book-name"
                        id="book-name"
                        ref={bookNameRef}
                        required
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="Teacher"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select Type
                      </label>
                      <select
                        id="Teacher"
                        name="Teacher"
                        ref={typeRef}
                        autoComplete="teacher-name"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>Adult</option>
                        <option>Kid</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="Type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select Teacher
                      </label>

                      <select
                        ref={teacherNameRef}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        {options.map((option) => (
                          <option key={option.id} value={option.email}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                {error && <p className="text-red-400">{error}</p>}
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 items-center">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Create Batch
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewBatch;

// supabase
// .from("batches")
// .insert({
//   batch_name: enteredBatchName,
//   teacher_email: enteredTeacherEmail,
//   type: enteredType,
//   book_name: enteredBookName,
// })
// .then((res) => {
//   if (!res.ok) {
//     setError(
//       "Teacher Already added to the batch please add a new teacher"
//     );
//     return;
//   }
// });

// const { data, error } = await supabase
// .from("teachers")
// .update({ batch_id_email: enteredTeacherEmail })
// .eq("email", enteredTeacherEmail)
// .select();

// if (error) {
// setError("Server Error");
// return;
// }

// console.log(data);
// console.log(error);
