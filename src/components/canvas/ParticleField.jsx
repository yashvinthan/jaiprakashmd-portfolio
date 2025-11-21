import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function ParticleField() {
  const pointsRef = useRef()
  const count = 800

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      arr[i3] = (Math.random() - 0.5) * 30
      arr[i3 + 1] = (Math.random() - 0.5) * 30
      arr[i3 + 2] = (Math.random() - 0.5) * 30
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.01
    pointsRef.current.rotation.x += delta * 0.005
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#93c5fd" transparent opacity={0.45} depthWrite={false} />
    </points>
  )
}
