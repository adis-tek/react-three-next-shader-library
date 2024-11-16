'use client'

import { Canvas } from '@react-three/fiber'

export default function test() {
  return (
    <div>
      <h1>Test Page</h1>
      <Canvas
        // camera={{
        //   position: [0, 0, 5],
        //   fov: 75,
        //   aspect: window.innerWidth / window.innerHeight,
        //   near: 0.1,
        //   far: 1000,
        // }}
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 0, 5]} color='red' />
        <mesh postion={2}>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial color='light-orange' />
        </mesh>
        <mesh postion={-5}>
          <sphereGeometry args={[2, 2, 2]} />
          <meshPhongMaterial color='light-orange' />
        </mesh>
      </Canvas>
    </div>
  )
}
