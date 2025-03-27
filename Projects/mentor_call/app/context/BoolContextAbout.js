"use client"; // Ensures this runs only on the client

import { createContext, useContext, useState, useEffect } from "react";

const BooleanContext = createContext();

export const BooleanProvider = ({ children }) => {
  const [value, setValue] = useState(false);
  const [userId, setUserId] = useState(9);

  // Ensure userId is set only after the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId"); // Example: Fetch from localStorage
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  return (
    <BooleanContext.Provider value={{ value, setValue, userId, setUserId }}>
      {children}
    </BooleanContext.Provider>
  );
};

export const useBoolean = () => useContext(BooleanContext);
