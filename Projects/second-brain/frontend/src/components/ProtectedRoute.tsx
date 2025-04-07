/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isAuthenticated();
      if (!loggedIn) {
        navigate("/signin");
      } else {
        setAuthChecked(true);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-10">Checking authentication...</div>;
  }

  return authChecked ? <>{children}</> : null;
};
