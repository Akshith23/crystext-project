import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import CrystalLattice from './CrystalLattice'
import Particles from './Particles'

function DynamicLights() {
  const lightA = useRef(null)
  const lightB = useRef(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (lightA.current) lightA.current.intensity = 1 + Math.sin(t * 0.8) * 0.25
    if (lightB.current) lightB.current.intensity = 0.8 + Math.cos(t * 0.6) * 0.2
  })

  return (
    <>
      <pointLight ref={lightA} position={[6, 5, 6]} color="#FF7A00" />
      <pointLight ref={lightB} position={[-6, -3, -5]} color="#8B5CF6" />
    </>
  )
}

export default function CrystalScene({ className = '' }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0.4, 8.5], fov: 42 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <fog attach="fog" args={['#FFF7ED', 9, 17]} />
        <ambientLight intensity={0.75} color="#FFF7ED" />
        <directionalLight position={[2, 6, 4]} intensity={0.65} color="#ffffff" />
        <DynamicLights />

        <Suspense fallback={null}>
          <CrystalLattice />
          <Particles count={120} spread={8} />
          <Sparkles count={36} scale={[6, 6, 6]} size={1.8} speed={0.2} color="#FFD6A5" opacity={0.42} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.1}
          rotateSpeed={0.45}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 1.6}
        />
      </Canvas>
    </div>
  )
}
