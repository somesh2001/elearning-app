import supabase from "@/supabaseClient";
import { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import StudentListCard from "../layout/StudentListCard";
import AuthContext from "../store/auth-context";

const BatchDetails = (props) => {
  const [showUserList, setshowUserList] = useState(false);
  const [batchDetail, setBatchDetail] = useState([]);
  const [enrollStudents, setEnrollStudents] = useState([]);

  const [scheduleDetail, setScheduleDetail] = useState();

  const authCtx = useContext(AuthContext);

  //getting the data of batches
  useEffect(() => {
    supabase
      .from("batches")
      .select("*")
      .then((response) => setBatchDetail(response.data));
  }, []);

  //filtering the bathches data
  const detail = batchDetail.filter((batch) => batch.id === +props.batchId);

  useEffect(() => {
    supabase
      .from("batches")
      .select("schedule")
      .then((response) =>
        setScheduleDetail(JSON.stringify(response.data, null, 2))
      );
  }, []);

  console.log(scheduleDetail);

  let arr;
  if (scheduleDetail) {
    arr = JSON.parse(scheduleDetail);
    console.log(arr);
  }

  // filtering the batches data
  let sheduleData;
  if (detail[0] && arr) {
    sheduleData = arr.filter(
      (sch) => sch.schedule.batchName === detail[0].batch_name
    );
    console.log(sheduleData[0].schedule.startDate);
  }
  //getting the student for the selected batch
  useEffect(() => {
    supabase
      .from("batch_student_relation")
      .select("*")
      .then((response) => setEnrollStudents(response.data));
  }, []);

  // filtering the batches data
  let batchStudents;
  if (detail[0]) {
    batchStudents = enrollStudents.filter(
      (batch) => batch.batch_id === detail[0].batch_name
    );
    // console.log(batchStudents);
  }

  //getting the list of all students

  useEffect(() => {
    supabase
      .from("students")
      .select("*")
      .then((response) => authCtx.setStudentsData(response.data));
  }, []);

  const closeList = () => {
    setshowUserList(false);
  };
  const openList = () => {
    setshowUserList(true);
  };

  return (
    <>
      {detail[0] && arr && (
        <div className="mt-10 sm:mt-20 mb-5">
          <div className="md:grid md:grid-cols-4 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow ml-10 sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-4 gap-4 mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className=" text-2xl   font-medium leading-6 text-gray-700 mb-4 ">
                        Batch Details
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                      <div className="flex  text-sm font-medium text-gray-700 ">
                        <span className="mt-1 font-normal w-2/5   ">
                          Batch Name{" "}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-3/5  "
                        >
                          {detail[0].batch_name}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                      <div className="flex  text-sm font-medium text-gray-700">
                        <span className="mt-1 font-normal w-2/5   ">
                          Book Name{" "}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-3/5  "
                        >
                          {detail[0].book_name}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4 shadow-sm p-2 ">
                      <div className="flex  text-sm font-medium text-gray-700">
                        <span className="mt-1 font-normal w-2/5   ">
                          Batch Type{" "}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-3/5  "
                        >
                          {detail[0].type}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                      <div className="flex  text-sm font-medium text-gray-700">
                        <span className="mt-1 font-normal w-2/5   ">
                          Teacher Name{" "}
                        </span>
                        <span id="" className="mt-1 ml-5 font-semibold w-3/5  ">
                          {" "}
                          <img
                            class="inline-block h-6 w-6 mx-3 rounded-full ring-2 ring-white"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                          />
                          {detail[0].teacher_email}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p className="text-red-400">Error </p> */}
              </div>
              <div className="overflow-hidden shadow ml-10 mt-5 sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-4 gap-4 mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className=" text-2xl   font-medium leading-6 text-gray-700 mb-4 ">
                        Batch Shedule
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                      <div className="flex  text-sm font-medium text-gray-700 ">
                        <span className="mt-1 font-semibold w-2/6   ">
                          Daily On{" "}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-2/6  "
                        >
                          Timeing for a Day
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-2/6  "
                        >
                          Start Date
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                      <div className="flex  text-sm font-medium text-gray-700 ">
                        <span className="mt-1 font-semibold w-2/6   ">
                          {sheduleData[0].schedule.days.map((day) => (
                            <span
                              name="role"
                              className="focus:outline-none px-3 border-x-2"
                            >
                              {day}
                            </span>
                          ))}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-2/6  "
                        >
                          {sheduleData[0].schedule.time}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-2/6  "
                        >
                          {sheduleData[0].schedule.startDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p className="text-red-400">Error </p> */}
              </div>
            </div>
            {/* Second */}
            {showUserList && (
              <div className="md:col-span-2 bg-white mr-10 shadow sm:rounded-md">
                <div className="items-center justify-center ">
                  <div class="grid grid-cols-4 gap-4  mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className=" text-2xl p-4  font-medium leading-6 text-gray-700 mb-4 ">
                        Add Student List
                      </h3>
                    </div>
                    <div class="align-end">
                      <button
                        onClick={closeList}
                        className="inline-flex justify-center m-2 rounded-md border border-transparent bg-gray-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="font-bold px-1 "> X </span>
                      </button>
                    </div>
                  </div>

                  {authCtx.studentsList.map((student) => (
                    <StudentListCard
                      email={student.email}
                      type={"addStudents"}
                      batch={detail[0].batch_name}
                      enrollStudents={batchStudents}
                    />
                  ))}
                </div>
              </div>
            )}
            {!showUserList && (
              <div className="md:col-span-2 bg-white mr-10 shadow sm:rounded-md">
                <div className="items-center justify-center ">
                  <div class="grid grid-cols-4 gap-4  mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className=" text-2xl p-4  font-medium leading-6 text-gray-700 mb-4 ">
                        Student List
                      </h3>
                    </div>
                    <div class="align-end">
                      <button
                        onClick={openList}
                        className="inline-flex justify-center m-2 rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="font-bold px-1 "> + </span>
                      </button>
                    </div>
                  </div>

                  {batchStudents.map((student) => (
                    <StudentListCard
                      email={student.student_id}
                      type={"addedStudents"}
                      enrollStudents={batchStudents}
                      batch={detail[0].batch_name}
                    />
                  ))}

                  <div class="align-end m-2"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BatchDetails;
