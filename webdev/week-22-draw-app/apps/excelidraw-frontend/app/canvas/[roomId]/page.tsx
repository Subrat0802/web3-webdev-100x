"use client";
import { initDraw } from "@/draw";
import { useEffect, useRef } from "react";

export default async function Canvas({params}:{
    params: {
        roomId: string
    }
}) {
    const roomId = (await params).roomId;
    console.log(roomId);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
        
        initDraw(canvasRef.current);
    }
  }, [canvasRef]);
  
  return (
    <div className="bg-white w-full h-[100vh]">
      <canvas ref={canvasRef} width={2000} height={1080} />

      <div className="fixed flex gap-3  top-0 left-0">
        <button className="bg-white text-black">Rect</button>
        <button className="bg-white text-black">Circle</button>
      </div>
    </div>
  );
}
