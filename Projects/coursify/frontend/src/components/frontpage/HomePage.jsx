import React from "react";
import Button from "../ui/Button";
import { ratings } from "../../data/frontpageRating";
import { coursesnamefp } from "../../data/coursesnamefp";
import { coursefp } from "../../data/coursesfp";
import { mentors } from "../../data/mentor";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="pt-24">
      {/* section one  */}
      <div className="flex flex-col w-10/12 mx-auto md:flex-row h-auto pb-8">
        <div className="w-full   md:w-[50%] flex justify-start items-center">
          <div className="pr-0  md:pr-16 ">
            <p className=" mt-5 text-4xl md:text-6xl">
              Master your self,
              <br /> Anywhare <br />{" "}
              <span className="font-semibold">Anytime,</span>
            </p>
            <p className="mt-5 mb-5">
              Join thousands of learners and take your career to the next level
              with our expert-led courses.
            </p>
            <Link to={"/profile"}><Button
              text={"Start Learning Now"}
              bgColor={"[#15CF74]"}
              primary={true}
            /></Link>
          </div>
        </div>
        <div className=" w-full md:w-[50%] py-8 px-8 md:px-0 mt-8 md:mt-0 flex bg-yellow-400  justify-center items-center">    
          <img className="w-full z-10 md:w-[90%] rounded-md md:rounded-full" src="/images/Gemini.jpg"/>
        </div>


        {/* <div className="w-full md:w-[60%] relative pt-10 md:pt-0">
        
          <div className="hidden md:block absolute p-4 bg-red-500 right-16 top-7 rounded-full"></div>
          <div className="hidden md:block absolute p-2 bg-red-500 top-44 rounded-full"></div>
          <div className="hidden md:block absolute p-3 bg-green-400 bottom-2 right-32 rounded-full"></div>

          <div className="text-xl hidden md:block bg-white shadow-md px-6 py-2 rounded-full mb-6 md:absolute md:right-80 md:top-20 z-10 w-fit mx-auto">
            <p className="text-green-600">2k+</p>
            <p className="text-[#333]">Students</p>
          </div>

          <div className="flex flex-row justify-center gap-4 md:block">
            <div>
              
            </div>
            
            <div className="h-[200px] block md:hidden lg:block w-[120px] md:h-[377px] md:w-[209px] border border-red-700 rounded-full relative md:absolute md:bottom-10 md:left-40 overflow-hidden">
              <img
                className="absolute right-3 bottom-0"
                src="/images/two.png"
              />
            </div>

          
            <div className="h-[250px] w-[150px] md:h-[520px] md:w-[288px] border border-red-700 rounded-full relative md:absolute md:bottom-14 md:right-20 overflow-hidden">
              <img
                className="absolute right-3 bottom-0"
                src="/images/one.png"
              />
            </div>
          </div>
        </div> */}
      </div>

      {/* website ratings  */}
      <div className="w-full py-10 bg-gray-300 ">
        <div className="w-10/12 grid grid-cols-2 gap-8 md:grid-cols-4 justify-between items-center mx-auto">
        {
          ratings.map((el, i) => (
            <div className="bg-gray-700 rounded-md flex flex-col justify-center text-center items-center gap-3 py-6 text-white font-semibold px-5 md:px-16" key={i}>
                <p  className="text-2xl text-[#15CF74]">{el.boldtext}</p>
                <p>{el.smallText}</p>
            </div>
          ))
        }
        </div>
      </div>


      {/* online courses  */}
      <div className="w-10/12 mx-auto pt-8">
          <div>
            <p className="text-4xl font-bold text-center">Explore Inspiring Online Courses</p>
            <div className="w-full  p-5 mt-4 flex justify-center flex-wrap text-center gap-3">
              {
                coursesnamefp.map((el, i) => (
                  <p key={i} className="px-4 py-1 border-2 cursor-pointer border-black rounded-full font-semibold">{el}</p>
                ))
              }
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4  justify-between gap-5 items-center pb-8 pt-3">
              {
                coursefp.map((el, i) => (
                  <div key={i} className="flex flex-col gap-2 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all duration-200 text-[#2e2d2d] bg-[#fdfafa]">
                    <img className="h-44 object-cover rounded-t-lg" src={el.img}/>
                    <div className="p-3 flex flex-col gap-2">
                      <div className="flex justify-between text-sm">
                        <p>{el.students}</p>
                        <p>{el.timing}</p>
                      </div>
                      <p className="font-bold">{el.heading}</p>
                      <p className="text-sm">{el.instructor}</p>
                    </div>
                    
                  </div>
                ))
              }
            </div>
          </div>
      </div>

      <div className="w-full py-16 bg-[#1b51a3] flex justify-center items-center flex-col">
          <p className="text-white text-center text-3xl mb-2">Master real-world projects with industry-led mentorship.</p>
          <p className="text-white text-center mb-11">🌟 Join 10,000+ learners building their dream careers.</p>
          <Button text="Start for free" bgColor={"[#15CF74]"}  primary={true}/>
      </div>

      <div className="w-10/12 mx-auto text-center py-8">
        <p className="text-4xl font-bold text-center">Our Expert Mentors</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {
            mentors.map((el, i) => (
              <div key={i} className="">
                <img className="rounded-lg" src={"/images/mentor.jpg"}/>
                <p className="">{el.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;
