'use client'

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import {
  Html,
  MeshReflectorMaterial,
  TransformControls,
  Text,
  OrbitControls,
  useHelper,
  PivotControls,
} from '@react-three/drei'
import { useThree, extend } from '@react-three/fiber'
import { useControls } from 'leva'

export default function Cube() {
  const { camera, gl } = useThree()
  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  const cubeRef = useRef()
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    cubeRef.current.rotation.y += delta
  })

  leva

  const controls = useControls({
    position: -2,
  })

  return (
    <>
      <OrbitControls />
      <directionalLight castShadow ref={directionalLight} position={[0, 0, 5]} color='white' />
      <ambientLight intensity={1.5} />
      <TransformControls object={cubeRef} />
      {/* <mesh ref={cubeRef} postion={[0, 0, 0]} rotation-x={Math.PI * 1} scale={[1.5, 1.5, 1.5]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color='light-orange' />
      </mesh> */}
      <PivotControls castShadow position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} rotation-x={Math.PI * 1}>
        <mesh ref={cubeRef} postion={[0, 0, 0]} rotation-x={Math.PI * 1} scale={[1.5, 1.5, 1.5]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial color='light-orange' />
          <Html wrapperClass='html-wrapper' center>
            My html
          </Html>
          <MeshReflectorMaterial />
        </mesh>

        <Text>My Text</Text>
      </PivotControls>
    </>
  )
}
