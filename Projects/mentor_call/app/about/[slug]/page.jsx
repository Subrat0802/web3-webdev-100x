"use client";
import { profile } from "@/app/data/Profiles"; 
import { useBoolean } from "../../context/BoolContextAbout";
import { useEffect, useState, useMemo } from "react";
import { ProfileCard } from "@/app/components/ProfileCard";
import { Services } from "@/app/components/Services";
import { Reviews } from "@/app/components/Reviews";

const AboutPage = () => {
  const { userId, value } = useBoolean();

  // Find user data only when userId changes
  const userData = useMemo(() => {
    return userId ? profile.find((el) => el.id === userId) : null;
  }, [userId]);

  return (
    <div className={`mx-auto ${value ? "w-full" : "w-[85%]"}`}>
      {userData ? (
        <>
          <ProfileCard data={userData} />
          <div className="w-[80%] mx-auto">
            <Services />
            <Reviews data={userData.reviews}/>
          </div>
        </>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default AboutPage;
