/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isAuthenticated();
      if (loggedIn) {
        navigate("/dashboard");
      } else {
        setAuthChecked(true);
      }
    };
    checkAuth();
  }, []);

  return authChecked ? <>{children}</> : null;
};
