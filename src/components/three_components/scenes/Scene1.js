import LinesRobot from '../objects/LinesRobot'
import OxygenContainer from '../objects/OxygenContainer'
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
      'sunset',
      'dawn',
      'night',
      'warehouse',
      'forest',
      'apartment',
      'studio',
      'city',
      'park',
      'lobby',
    ],
    value: 'forest',
  }

  const { hdri } = useControls('environment/lighting', { hdri: environmentControls })

  return (
    <>
      <Stage adjustCamera={false} contactShadow={true} shadows={true}>
        <Environment preset={hdri} background={false} />
        <OxygenContainer3 rotation={[0, 90, 0]} position={[6, 0, 0]} />
        <mesh position={[0, 3, 0]}>
          <torusKnotBufferGeometry args={[1, 0.5, 128, 32]} />
          <meshStandardMaterial metalness={1} roughness={0} />
        </mesh>
        <AbstractSphere animationOffset={[6, 2, 0]} color="red" />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[6, 2, 0]} color="red" />
      </Stage>
    </>
  );
}

