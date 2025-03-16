"use client";
import { useEffect, useState } from "react";
import { WS_URL } from "../app/room/config";

export function useSocket() {
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const ws = new WebSocket(
      `${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyMjkzYzkxOS03M2RjLTQ0YTMtOWEyNi1jNWMzMzgzOGY0MjciLCJpYXQiOjE3NDIwNTM2MjN9.AjFGMu4IJAgQc2XnDSYBUTNeDHdTdA9Z9oaVSSxEGeU`
    );
    ws.onopen = () => {
      setLoading(false);
      setSocket(ws);
    };
  }, []);

  return {
    socket,
    loading,
  };
}
