import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function Box({ position, speed }) {
   // This reference gives us direct access to the THREE.Mesh object
   const ref = useRef();
   const rotationSpeedx = speed * (Math.random() % 3);
   const rotationSpeedy = 0.5 * speed * (Math.random() % 3);
   const rotationSpeedz = 0.01 * speed * (Math.random() % 3);
   // Hold state for hovered and clicked events
   // Subscribe this component to the render-loop, rotate the mesh every frame
   useFrame((state, delta) => {
      ref.current.rotation.x += rotationSpeedx;
   });
   // Return the view, these are regular Threejs elements expressed in JSX
   return (
      <mesh position={position} ref={ref} rotation={[0, 0.2, 0]}>
         <circleGeometry args={[1, 16]} />
         <meshStandardMaterial color={"darkorange"} />
      </mesh>
   );
}

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("three")).render(
   <Canvas>
      <pointLight position={[0, 0, 1000]} />
      <pointLight position={[100, -10, -10]} />
      {new Array(50).fill().map((_, i) => (
         <Box key={i} position={[0.01 * (i - 25), 0, 2]} speed={0.01} />
      ))}
   </Canvas>
);
