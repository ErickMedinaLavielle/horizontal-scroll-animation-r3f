import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import "./styles.css";

export default function App() {
  const [texture1, texture2] = useLoader(THREE.TextureLoader, [img1, img2]);
  const scrollArea = useRef();
  const [left, setLeft] = useState(0);
  function onScroll(e) {
    setLeft(e.target.scrollLeft);
  }
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
      <Canvas>
        <mesh position={[left * -0.01, 0, 0]}>
          <planeBufferGeometry attach="geometry" args={[10, 7]} />
          <meshBasicMaterial attach="material" map={texture1} />
        </mesh>
        <mesh position={[0, 8 - left * 0.01, 0]}>
          <planeBufferGeometry attach="geometry" args={[10, 7]} />
          <meshBasicMaterial attach="material" map={texture2} />
        </mesh>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div
          style={{ width: `5000px`, height: "100vh", position: "relative" }}
        />
      </div>
    </>
  );
}
