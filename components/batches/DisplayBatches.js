import React from "react";
const courses = [
  {
    id: 1,
    title: "Batch 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Batch 2",
    description:
      "Praesent fringilla quam id ante dictum, a tristique nisl congue.",
  },
  {
    id: 3,
    title: "Batch 3",
    description:
      "Vestibulum auctor nisi vitae odio facilisis, at pharetra magna sollicitudin.",
  },
  {
    id: 3,
    title: "Batch 4",
    description:
      "Vestibulum auctor nisi vitae odio facilisis, at pharetra magna sollicitudin.",
  },
];

const CourseCard = ({ title, description }) => (
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{title}</div>
      <p class="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);
const DisplayBatches = () => {
  return (
    <>
      <div>
        <img
          className="mx-auto h-12 w-auto mt-20"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-800">
          Manage Batches Of Your Organization
        </h2>
      </div>
      <div>
        <div class="flex flex-wrap">
          {courses.map((course) => (
            <div class="w-1/3 p-4" key={course.id}>
              <CourseCard
                title={course.title}
                description={course.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayBatches;
