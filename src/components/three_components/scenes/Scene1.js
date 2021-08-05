import LowPolyJet from '../objects/LowPolyJet'
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

  let ship = useRef()

  useFrame((state) => {
    // console.log(state.camera)
    // console.log(ref)
    // state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 42, step)
    // state.camera.position.lerp(vec.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), step)
    // state.camera.lookAt(0, 0, 0)
    // state.camera.updateProjectionMatrix()
    // light.current.position.lerp(vec.set(zoom ? 4 : 0, zoom ? 3 : 8, zoom ? 3 : 5), step)
  })

  // const ref = useFrame( (pcam) => {
  //   console.log( `lookAt is ${lookAt}`)
  //   pcam.lookAt( new THREE.Vector3( ...lookAt ) )
  // }, [ lookAt ] )

  const { hdri } = useControls('environment/lighting', { hdri: environmentControls })

  console.log(hdri)

  return (
    <>
      <PerspectiveCamera makeDefault position={[28, 4, -15]} />

      <Stage adjustCamera={false} contactShadow={true} shadows={true}>

        <Suspense fallback={null}>
          <Environment preset={hdri} background={false} />
        </Suspense>

        <LowPolyJet ref={ref => (ship = ref)} />
        {/* <AnimationExperiment /> */}
      </Stage>
    </>
  );
}
