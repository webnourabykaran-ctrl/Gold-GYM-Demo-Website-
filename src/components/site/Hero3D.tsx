import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Dumbbell() {
  const ref = useRef<Group>(null);
  useFrame((state, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.35;
    ref.current.rotation.x = 0.35 + state.pointer.y * 0.2;
    ref.current.rotation.z = 0.25 + state.pointer.x * 0.15;
  });
  const gold = { color: "#d4af5a", metalness: 1, roughness: 0.22 } as const;
  const dark = { color: "#161512", metalness: 0.85, roughness: 0.35 } as const;
  const plates = [-1.25, -0.95, 0.95, 1.25];
  return (
    <group ref={ref}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.09, 0.09, 3.4, 32]} />
        <meshStandardMaterial {...gold} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.12, 0.12, 1.4, 32]} />
        <meshStandardMaterial {...dark} />
      </mesh>
      {plates.map((x, i) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[i === 0 || i === 3 ? 0.62 : 0.78, i === 0 || i === 3 ? 0.62 : 0.78, 0.22, 64]} />
          <meshStandardMaterial {...(i === 0 || i === 3 ? gold : dark)} />
        </mesh>
      ))}
      {[-1.5, 1.5].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.16, 0.16, 0.14, 32]} />
          <meshStandardMaterial {...gold} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 35 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 8, 5]} intensity={2.2} color="#ffe4a0" />
      <directionalLight position={[-6, -3, -2]} intensity={1.2} color="#c99a3c" />
      <pointLight position={[0, 4, 3]} intensity={1.8} color="#ffffff" />
      <spotLight position={[4, 6, 4]} intensity={25} angle={0.4} penumbra={1} color="#ffd98a" />
      <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
        <Dumbbell />
      </Float>
      <ContactShadows position={[0, -1.6, 0]} opacity={0.5} scale={8} blur={2.6} far={3} />
    </Canvas>
  );
}
