'use client'

import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'

export default function test() {
  return (
    <div>
      {/* <h1>Test Page</h1> */}
      {/* <Canvas
        // camera={{
        //   position: [0, 0, 5],
        //   fov: 75,
        //   aspect: window.innerWidth / window.innerHeight,
        //   near: 0.1,
        //   far: 1000,
        // }}
        camera={{ position: [5, 1.5, 3] }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 0, 5]} color='white' />
        <group>
          <mesh postion={[9, 0, 0]} rotation-x={Math.PI * 1} scale={[1.5, 1.5, 1.5]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhongMaterial color='light-orange' />
          </mesh>
        </group>
      </Canvas> */}
      <Canvas
        style={{ height: '100vh' }}
        // camera={{
        //   position: [0, 0, 5],
        //   fov: 75,
        //   aspect: window.innerWidth / window.innerHeight,
        //   near: 0.1,
        //   far: 1000,
        // }}
        camera={{ position: [9, 1.5, 3] }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 0, 5]} color='white' />
        <mesh postion={[9, 0, 0]} rotation-x={Math.PI * 1} scale={[1.5, 1.5, 1.5]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial color='light-orange' />
        </mesh>
      </Canvas>
    </div>
  )
}
