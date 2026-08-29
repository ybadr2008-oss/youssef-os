"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// رسم شعار أبل (التفاحة + التفاحة المقضومة + الورقة)
function AppleLogo() {
  const shape = new THREE.Shape();
  // رسم جسم التفاحة
  shape.moveTo(0, 0.08);
  shape.bezierCurveTo(0.03, 0.12, 0.08, 0.12, 0.1, 0.07);
  shape.bezierCurveTo(0.12, 0.02, 0.1, -0.06, 0.06, -0.1);
  shape.bezierCurveTo(0.03, -0.12, -0.03, -0.12, -0.06, -0.1);
  shape.bezierCurveTo(-0.1, -0.06, -0.12, 0.02, -0.1, 0.07);
  shape.bezierCurveTo(-0.08, 0.12, -0.03, 0.12, 0, 0.08);

  // ورقة الشجرة فوق التفاحة
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0.1);
  leafShape.quadraticCurveTo(0.03, 0.15, 0.04, 0.18);
  leafShape.quadraticCurveTo(0, 0.16, -0.02, 0.12);

  return (
    <group scale={[0.45, 0.45, 0.45]}>
      <mesh position={[0, 0, 0]}>
        <shapeGeometry args={[shape]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <shapeGeometry args={[leafShape]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

function DeskSetup() {
  const laptopRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    laptopRef.current.position.y = 0.08 + Math.sin(t * 1.5) * 0.01;
  });

  return (
    <group position={[0, -0.5, 0]}>
      {/* المكتب / الترابيزة */}
      <RoundedBox args={[3.2, 0.1, 1.8]} radius={0.03} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.2} />
      </RoundedBox>

      {/* أرجل المكتب */}
      <mesh position={[-1.4, -0.8, -0.7]}>
        <boxGeometry args={[0.1, 1.5, 0.1]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[1.4, -0.8, -0.7]}>
        <boxGeometry args={[0.1, 1.5, 0.1]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[-1.4, -0.8, 0.7]}>
        <boxGeometry args={[0.1, 1.5, 0.1]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[1.4, -0.8, 0.7]}>
        <boxGeometry args={[0.1, 1.5, 0.1]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      {/* MacBook Space Gray - سنترته في نصف المكتب بالضبط */}
      <group ref={laptopRef} position={[0, 0.08, 0.1]}>
        {/* قاعدة الـ MacBook */}
        <RoundedBox args={[1.1, 0.03, 0.75]} radius={0.015} position={[0, 0, 0]}>
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
        </RoundedBox>

        {/* شاشة اللاب توب */}
        <group position={[0, 0.015, -0.37]} rotation={[0.25, 0, 0]}>
          {/* ظهر الشاشة Space Gray */}
          <RoundedBox args={[1.1, 0.7, 0.015]} radius={0.015} position={[0, 0.35, 0]}>
            <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
          </RoundedBox>
          
          {/* الشاشة من الأمام */}
          <mesh position={[0, 0.35, 0.01]}>
            <planeGeometry args={[1.04, 0.64]} />
            <meshBasicMaterial color="#020617" />
          </mesh>
          <mesh position={[0, 0.35, 0.011]}>
            <planeGeometry args={[0.98, 0.58]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>

          {/* شعار Apple الأصلي المضيء خلف الشاشة */}
          <group position={[0, 0.35, -0.009]} rotation={[0, Math.PI, 0]}>
            <AppleLogo />
          </group>
        </group>
      </group>

      {/* إضاءة نيون تحت المكتب */}
      <pointLight position={[0, -0.2, 0]} color="#818cf8" intensity={2} distance={3} />
    </group>
  );
}

export default function RoomCanvas() {
  return (
    <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/60 shadow-2xl relative">
      <div className="absolute top-3 left-3 z-10 text-[10px] md:text-xs bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full border border-slate-700 text-slate-300">
        🖱️ حرك الماوس للتلفيف 3D
      </div>
      <Canvas camera={{ position: [0, 1.8, 4.0], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} />
        <pointLight position={[-3, 2, -2]} color="#ec4899" intensity={1.5} />
        <DeskSetup />
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 4} />
      </Canvas>
    </div>
  );
}