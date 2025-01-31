import React, { useEffect, useState } from "react";

const ExploreCourse = () => {

    const [allCourses, setAllCourses] = useState(null);
    console.log("allCourses", allCourses);

  const fetchAllCourses = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/auth/getAllCourses",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("coursify-token")}`,
          },
        }
      );

      const data = await response.json();
      setAllCourses(data.data);


    } catch (err) {
        console.log("error", err);
    }
  };
  useEffect(() => {
    fetchAllCourses();
  }, []);

  return <div className="bg-gray-800 min-h-screen flex justify-center items-center flex-col pt-32">
    <div className="w-full mt-8 min-h-[100vh] px-8">
        <p className="text-4xl text-white font-mono underline-offset-8 underline">
          Courses
        </p>
        {allCourses === null ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 ">
            {allCourses.map((el, id) => (
              <div
                className="text-white border p-3 rounded-lg bg-gray"
                key={id}
              >
                <p className="text-3xl text-wrap word-break truncate">{el.courseName}</p>
                <p className="text-wrap word-break ">{el.courseDescription}</p>
                <button className="bg-gray-900 px-2 py-1 rounded-md mt-2">Buy Course</button>
              </div>
            ))}
          </div>
        )}
      </div>
  </div>;
};

export default ExploreCourse;
