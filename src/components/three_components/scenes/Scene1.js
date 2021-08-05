import LowPolyJet from '../objects/LowPolyJet'
import Box from '../objects/Box'
import AnimationExperiment from '../objects/AnimationExperiment'
import WobblyTorus from '../objects/WobblyTorus'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera, Environment, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useState, useEffect, useRef, Suspense } from 'react';

import { useControls } from "leva"

export default function Scene({ sceneIndex }) {
  const environmentControls = {
    hint: 'HDRI Lighting',
    options: [
      'city',
      'sunset',
      // 'dawn',
      // 'night',
      // 'warehouse',
      'forest',
      // 'apartment',
      // 'studio',
      // 'park',
      // 'lobby',
    ],
    value: 'forest',
  }
  
  const { position } = useControls({
    position: { x: 0, y: 0, z: 0 },
  })

  const { hdri } = useControls('environment/lighting', { hdri: environmentControls })

  return (
    <>
      <PerspectiveCamera makeDefault />
      {/* <OrbitControls target={[1, 1, 0]} /> */}

      <Stage adjustCamera={false} contactShadow={true} shadows={true}>

        <Box position={[0,0,-30]}/>
        <Box position={[0,0,-20]}/>
        <Box position={[0,0,-10]}/>
        <Box position={[0,0,0]}/>
        <Box position={[0,0,10]}/>
        <Box position={[0,0,20]}/>
        <Box position={[0,0,30]}/>
        <Box position={[0,0,40]}/>
        <Box position={[0,0,50]}/>
        <Box position={[0,0,60]}/>
        <Box position={[0,0,70]}/>
        <Box position={[0,0,80]}/>
        <Box position={[0,0,90]}/>

        <Suspense fallback={null}>
          <Environment preset={hdri} background={false} />
        </Suspense>

        <LowPolyJet />
        {/* <AnimationExperiment /> */}
      </Stage>
    </>
  );
}
