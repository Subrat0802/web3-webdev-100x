import React, { useEffect, useRef, useState } from "react";

const CreateCourse = () => {
  const [createdByInstructor, setCreatedByInstructor] = useState(null);
  const titleRef = useRef();
  const descriptionRef = useRef();

//   console.log(createdByInstructor)

  // Extract the fetch function so it can be reused
  const fetchCoursesbyInstructor = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/auth/courseCreatedByUser",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("coursify-token")}`,
          },
        }
      );
      const data = await response.json();
      setCreatedByInstructor(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCoursesbyInstructor();
  }, []); // Fetch on initial render

  const createCourse = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/auth/createcourse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("coursify-token")}`,
          },
          body: JSON.stringify({
            courseName: titleRef.current.value,
            courseDescription: descriptionRef.current.value,
          }),
        }
      );

      if (response.ok) {
        // Clear input fields after submission
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        // Re-fetch the updated list of courses
        await fetchCoursesbyInstructor();
      }
    } catch (err) {
      console.log(err);
    }
  };


  const deleteCourse = async (id) => {
    try{
        const response = await fetch("http://localhost:3000/api/v1/auth/deleteCourse", {
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("coursify-token")}`,
            },
            body:JSON.stringify({id})
        })

        const data = await response.json();
        console.log(data.message)
        await fetchCoursesbyInstructor();
    }catch(err){
        console.log("errror", err);
    }
  }

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center flex-col pt-32">
      <div className="flex flex-col w-[30%] gap-3">
        <input
          ref={titleRef}
          placeholder="title"
          className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
        />
        <textarea
          ref={descriptionRef}
          placeholder="description"
          className="w-full h-40 p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
        />
        <button
          onClick={createCourse}
          className="bg-gray-900 text-white text-xl p-2 rounded-lg hover:bg-gray-950 transition-colors duration-200"
        >
          Submit
        </button>
      </div>

      <div className="w-full mt-8 min-h-[100vh] px-8">
        <p className="text-4xl text-white font-mono underline-offset-8 underline">
          Course Created By me
        </p>
        {createdByInstructor === null ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 ">
            {createdByInstructor.map((el, id) => (
              <div
                className="text-white border p-3 rounded-lg bg-gray"
                key={id}
              >
                <p className="text-3xl">{el.courseName}</p>
                <p>{el.courseDescription}</p>
                <button onClick={() => deleteCourse(el._id)} className="bg-gray-900 px-2 py-1 rounded-md mt-2">Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateCourse;