/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, Suspense } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'

const filePath = window.location.href + '/models/LowPolyJet.glb'

function TheModel() {
  const groupRef = useRef()
  const shipRef = useRef()
  const targetRef = useRef()
  const camPositionRef = useRef()

  const { scene, animations } = useGLTF(filePath)

  const mixer = new THREE.AnimationMixer(scene)

  const prepAnimation = (rawData) => {
    const animationClip = mixer.clipAction(rawData)
    animationClip.setLoop( THREE.LoopOnce )
    animationClip.clampWhenFinished = true
    animationClip.play()
  }

  useEffect(() => {
    const a1 = mixer.clipAction(animations[0])
    const a2 = mixer.clipAction(animations[1])
    const a3 = mixer.clipAction(animations[2])

    a1.setLoop( THREE.LoopOnce )
    a2.setLoop( THREE.LoopOnce )
    a3.setLoop( THREE.LoopOnce )

    a1.clampWhenFinished = true
    a2.clampWhenFinished = true
    a3.clampWhenFinished = true
    
    a1.play()
    a2.play()
    a3.play()

    console.log(groupRef.current.children)
    shipRef.current = groupRef.current.children.find(item => item.name === 'Ship')
    targetRef.current = groupRef.current.children.find(item => item.name === 'CameraTarget')
    camPositionRef.current = groupRef.current.children.find(item => item.name === 'CamPosition')

    console.log(targetRef.current)
  })

  useFrame((state, delta) => {
    mixer.update(delta);
    state.camera.lookAt(targetRef.current.position)
    state.camera.position.x = camPositionRef.current.position.x
    state.camera.position.y = camPositionRef.current.position.y
    state.camera.position.z = camPositionRef.current.position.z

    // console.log(targetRef.current.position)

    targetRef.current.scale.x = .001
    targetRef.current.scale.y = .001
    targetRef.current.scale.z = .001
  });

  return <primitive ref={groupRef} object={scene} position={[0, 0, 0]} />;
}

export default function Model(props) {
  return (
    <group {...props} dispose={null}>
      <Suspense fallback={null}>
        <TheModel />
      </Suspense>
    </group>
  )
}

useGLTF.preload(filePath)