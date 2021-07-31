import LinesRobot from '../objects/LinesRobot'
import OxygenContainer from '../objects/OxygenContainer'
import OxygenContainer2 from '../objects/OxygenContainer2'
import OxygenContainer3 from '../objects/OxygenContainer3'
import AbstractSphere from '../objects/AbstractSphere'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, Suspense } from 'react';

export default function Scene({ sceneIndex }) {
  const environmentOptions = [
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
  ]

  return (
    <>
      {/* <directionalLight position={[-10, -10, -5]} intensity={1} /> */}
      {/* <ambientLight /> */}
      {/* <pointLight position={[10, 10, 10]} /> */}

      <Stage adjustCamera={false} environment={environmentOptions[0]} intensity={.5} contactShadow={true} shadows={true}>
        <OxygenContainer position={[-6, 0, 0]} rotation={[0, 90, 0]} />
        <AbstractSphere animationOffset={[-6, 2, 0]} color="black" />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[-6, 2, 0]} color="black" />

       {/*  <OxygenContainer2 rotation={[0, 80, 0]} />
        <AbstractSphere animationOffset={[0, 2, 0]} color="#bbbbbb" />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[0, 2, 0]} color="#bbbbbb" /> 

        <OxygenContainer3 rotation={[0, 90, 0]} position={[6, 0, 0]} />
        <AbstractSphere animationOffset={[6, 2, 0]} color="red" />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[6, 2, 0]} color="red" />*/}
      </Stage>
    </>
  );
}

