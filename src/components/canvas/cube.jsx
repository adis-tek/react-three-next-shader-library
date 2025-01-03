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
  SoftShadows,
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

  // leva

  // const controls = useControls({
  //   position: -2,
  // })

  return (
    <>
      <SoftShadows frustum={3.75} size={50} near={9.5} samples={17} rings={11} />
      <OrbitControls />
      <directionalLight
        castShadow
        ref={directionalLight}
        position={[0, 0, 5]}
        color='white'
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={2}
      />
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
