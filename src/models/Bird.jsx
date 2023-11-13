import React, { useEffect, useRef } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const BirdRef = useRef();
  const { animations, scene } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, BirdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //  update the Y position such that it has the bird like motion using sine wave
    BirdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // checking if the bird reached a certain endpoint relative to the camera
    if (BirdRef.current.position.x > camera.position.x + 10) {
      // changeing the direction to backward and rotate the bird 180 degree on the y axis.
      BirdRef.current.rotation.y = Math.PI;
    } else if (BirdRef.current.position.x < camera.position.x - 10) {
      // change direction to forward and reset the bird's rotation
      BirdRef.current.rotation.y = 0;
    }
    // update the x and z positions based on the direction
    if (BirdRef.current.rotation.y === 0) {
      // moving forward
      BirdRef.current.position.x += 0.01;
      BirdRef.current.position.z -= 0.01;
    } else {
      //  moving backward
      BirdRef.current.position.x -= 0.01;
      BirdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={BirdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
