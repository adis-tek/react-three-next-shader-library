'use client'

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Html, MeshReflectorMaterial, TransformControls, Text, OrbitControls, PivotControls } from '@react-three/drei'
import { useThree, extend } from '@react-three/fiber'

export default function Cube() {
  const { camera, gl } = useThree()
  const cubeRef = useRef()
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    cubeRef.current.rotation.y += delta
  })
  return (
    <>
      <OrbitControls />
      <TransformControls object={cubeRef} />
      {/* <mesh ref={cubeRef} postion={[0, 0, 0]} rotation-x={Math.PI * 1} scale={[1.5, 1.5, 1.5]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color='light-orange' />
      </mesh> */}
      <PivotControls position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} rotation-x={Math.PI * 1}>
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
