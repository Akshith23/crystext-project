import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import * as THREE from 'three'
import { generateDiamondLattice } from './latticeGeometry'

export default function CrystalLattice() {
  const tiltRef = useRef(null)
  const spinRef = useRef(null)
  const targetTilt = useRef({ x: 0, y: 0 })

  const { atoms, bonds } = useMemo(() => generateDiamondLattice({ cells: 2, spacing: 1.55 }), [])

  useFrame((state, delta) => {
    if (spinRef.current) {
      spinRef.current.rotation.y += delta * 0.16
      spinRef.current.rotation.x += delta * 0.02
    }

    if (tiltRef.current) {
      targetTilt.current.x = state.pointer.y * 0.22
      targetTilt.current.y = state.pointer.x * 0.32
      tiltRef.current.rotation.x = THREE.MathUtils.lerp(tiltRef.current.rotation.x, targetTilt.current.x, 0.04)
      tiltRef.current.rotation.y = THREE.MathUtils.lerp(tiltRef.current.rotation.y, targetTilt.current.y, 0.04)
    }
  })

  return (
    <group ref={tiltRef}>
      <group ref={spinRef}>
        {atoms.map((position, index) => (
          <mesh key={`atom-${index}`} position={position}>
            <sphereGeometry args={[0.15, 24, 24]} />
            <meshStandardMaterial
              color="#FF7A00"
              emissive="#8B5CF6"
              emissiveIntensity={0.45}
              roughness={0.28}
              metalness={0.25}
            />
          </mesh>
        ))}

        {bonds.map(([a, b], index) => (
          <Line key={`bond-core-${index}`} points={[atoms[a], atoms[b]]} color="#FFD6A5" lineWidth={1.4} transparent opacity={0.72} />
        ))}

        {bonds.map(([a, b], index) => (
          <Line key={`bond-accent-${index}`} points={[atoms[a], atoms[b]]} color="#4D7C59" lineWidth={3} transparent opacity={0.16} />
        ))}
      </group>
    </group>
  )
}
