import LowPolyJet from '../objects/LowPolyJet'
import Box from '../objects/Box'
import AnimationExperiment from '../objects/AnimationExperiment'
import WobblyTorus from '../objects/WobblyTorus'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera, Environment, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useControls } from "leva"

export default function Scene({ sceneIndex }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />

      <Stage adjustCamera={false} contactShadow={true} shadows={true}>

        <Box position={[0,0,0]} scale={[0,0,0]}/>

        <Suspense fallback={null}>
          <Environment preset={'city'} background={false} />
        </Suspense>
      </Stage>
    </>
  );
}
