import OxygenContainer2 from '../objects/OxygenContainer2'
import AbstractSphere from '../objects/AbstractSphere'
import { OrbitControls, Stats, Stage, Loader, PerspectiveCamera, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useState, useEffect, Suspense } from 'react';

export default function Scene({ sceneIndex }) {
  return (
    <>
      <Stage adjustCamera={false} contactShadow={true} shadows={true} >
        <OxygenContainer2 rotation={[0, 80, 0]} />
        <AbstractSphere animationOffset={[0, 2, 0]} color="#bbbbbb" />
        <AbstractSphere scale={[0.7, 0.7, 0.7]} animationOffset={[0, 2, 0]} color="#bbbbbb" />
      </Stage>
    </>
  );
}

