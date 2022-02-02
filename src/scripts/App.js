// Import Sytles
import "../styles.css";
import React, { Suspense } from "react";

// Import App Modules
import { Environment, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

export default function App() {
  return (
    <>
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="city" />
        </Suspense>
      </Canvas>

      {/* https://docs.pmnd.rs/drei/loaders/loader */}
      <Loader />
    </>
  );
}