import * as THREE from 'three'

const DIAMOND_BASIS = [
  [0, 0, 0],
  [0, 0.5, 0.5],
  [0.5, 0, 0.5],
  [0.5, 0.5, 0],
  [0.25, 0.25, 0.25],
  [0.25, 0.75, 0.75],
  [0.75, 0.25, 0.75],
  [0.75, 0.75, 0.25],
]

export function generateDiamondLattice({ cells = 2, spacing = 1.6, bondTolerance = 0.1 } = {}) {
  const seen = new Set()
  const atoms = []

  for (let x = 0; x < cells; x++) {
    for (let y = 0; y < cells; y++) {
      for (let z = 0; z < cells; z++) {
        DIAMOND_BASIS.forEach(([bx, by, bz]) => {
          const px = x + bx
          const py = y + by
          const pz = z + bz
          const key = `${px.toFixed(3)}|${py.toFixed(3)}|${pz.toFixed(3)}`
          if (!seen.has(key)) {
            seen.add(key)
            atoms.push(new THREE.Vector3(px, py, pz))
          }
        })
      }
    }
  }

  const mid = (cells - 1) / 2 + 0.375
  const center = new THREE.Vector3(mid, mid, mid)
  atoms.forEach((point) => point.sub(center).multiplyScalar(spacing))

  const nnDistance = (Math.sqrt(3) / 4) * spacing
  const tolerance = bondTolerance * spacing
  const bonds = []

  for (let i = 0; i < atoms.length; i++) {
    for (let j = i + 1; j < atoms.length; j++) {
      const distance = atoms[i].distanceTo(atoms[j])
      if (Math.abs(distance - nnDistance) < tolerance) {
        bonds.push([i, j])
      }
    }
  }

  return { atoms, bonds }
}
