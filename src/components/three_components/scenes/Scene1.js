import LinesRobot from '../objects/LinesRobot'
import OxygenContainer from '../objects/OxygenContainer'
import WobblyTorus from '../objects/WobblyTorus'
import OxygenContainer2 from '../objects/OxygenContainer2'
import OxygenContainer3 from '../objects/OxygenContainer3'
import AbstractSphere from '../objects/AbstractSphere'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, Suspense } from 'react';

import { useControls } from "leva"

export default function Scene({ sceneIndex }) {
  const environmentControls = {
    hint: 'HDRI Lighting',
    options: [
      'city',
      'sunset',
      'dawn',
      'night',
      'warehouse',
      'forest',
      'apartment',
      'studio',
      'park',
      'lobby',
    ],
    value: 'city',
  }

  const { hdri } = useControls('environment/lighting', { hdri: environmentControls })

  console.log(hdri)

  return (
    <>
      <Stage adjustCamera={false} contactShadow={true} shadows={true}>
        {/* <Suspense fallback={null}> */}
          {/* <Environment preset={'forest'} background={true} /> */}
        {/* </Suspense> */}
        <Environment preset={hdri} background={false} />
        <OxygenContainer3 rotation={[0, 90, 0]} position={[6, 0, 0]} />
        <WobblyTorus animationOffset={[6, 2, 0]} />

        {/* <mesh
          castShadow
          receiveShadow
          position={[1, 2, 0]}
        >
          <torusKnotBufferGeometry args={[.5, 0.25, 128, 32]} />
          <meshPhysicalMaterial roughness={0} metalness={1} />
        </mesh> */}
        {/* {hdri ? <Environment preset={hdri} background={false} /> : null} */}

        {/* <AbstractSphere animationOffset={[6, 2, 0]} color="red" /> */}
        {/* <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[6, 2, 0]} color="red" /> */}
      </Stage>
    </>
  );
}

