import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles({ count = 220, spread = 9 }) {
  const pointsRef = useRef(null)

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread * 2
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 2
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 2
      speeds[i] = 0.05 + Math.random() * 0.12
    }

    return { positions, speeds }
  }, [count, spread])

  useFrame((state, delta) => {
    const geometry = pointsRef.current?.geometry
    if (!geometry) return

    const positionAttr = geometry.attributes.position
    for (let i = 0; i < count; i++) {
      const y = positionAttr.getY(i) + speeds[i] * delta
      positionAttr.setY(i, y > spread ? -spread : y)
    }

    positionAttr.needsUpdate = true
    pointsRef.current.rotation.y += delta * 0.01
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#FFD6A5"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  )
}
