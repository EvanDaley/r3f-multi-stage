import LinesRobot from '../objects/LinesRobot'
import OxygenContainer from '../objects/OxygenContainer'
import OxygenContainer2 from '../objects/OxygenContainer2'
import OxygenContainer3 from '../objects/OxygenContainer3'
import AbstractSphere from '../objects/AbstractSphere'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, Suspense } from 'react';

export default function Scene({ sceneIndex }) {
  const environmentOptions = [
    'warehouse',
    'sunset',
    'dawn',
    'night',
    'forest',
    'apartment',
    'studio',
    'city',
    'park',
    'lobby',
  ]

  return (
    <>
      {/* <color attach="background" args={"black"} /> */}

      <Stage adjustCamera={false} contactShadow={true} shadows={true} >
        {/* <Environment preset={environmentOptions[4]} background={false}/> */}

        <OxygenContainer2 rotation={[0, 80, 0]} />
        <AbstractSphere animationOffset={[0, 2, 0]} color="#bbbbbb" />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[0, 2, 0]} color="#bbbbbb" />

        {/* <OxygenContainer3 rotation={[0, 90, 0]} position={[6, 0, 0]} />
        <AbstractSphere animationOffset={[6, 2, 0]} color="red" />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[6, 2, 0]} color="red" /> */}
      </Stage>
    </>
  );
}

