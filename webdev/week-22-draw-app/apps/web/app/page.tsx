"use client";

import { useState } from "react";
// import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <input
        style={{
          padding: "2px",
        }}
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        type="text"
        placeholder="RoomId"
      />
      <button
        style={{
          padding: "2px",
        }}
        onClick={() => {
          router.push(`/room/${roomId}`);
        }}
      >
        join room
      </button>
    </div>
  );
}
