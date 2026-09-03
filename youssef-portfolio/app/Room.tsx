"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function RoomCanvas() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* مكعب تجريبي لحد ما نبني تفاصيل الغرفة */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.3} />
        </mesh>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}