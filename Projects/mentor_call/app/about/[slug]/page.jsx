"use client";
import { profile } from "@/app/data/Profiles"; // Ensure correct import path
import { useBoolean } from "../../context/BoolContextAbout";
import { useEffect, useState, useMemo } from "react";
import { ProfileCard } from "@/app/components/ProfileCard";
import { Services } from "@/app/components/Services";

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
          <div className="border w-[80%] mx-auto">
            <Services />
          </div>
        </>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default AboutPage;
