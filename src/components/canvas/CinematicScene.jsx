import { Environment, Stars, OrbitControls } from '@react-three/drei'
import DNAHelix from './DNAHelix'
import ParticleField from './ParticleField'
import VolumetricLighting from './VolumetricLighting'
import FloatingLabels from './FloatingLabels'
import ScrollCameraRig from './ScrollCameraRig'

export default function CinematicScene() {
  return (
    <>
      <color attach="background" args={['#01030a']} />
      <fog attach="fog" args={['#01030a', 30, 150]} />
      <ambientLight intensity={0.3} color="#0f172a" />
      <directionalLight position={[6, 4, 3]} intensity={1} color="#5ee7ff" />
      <directionalLight position={[-6, -4, -2]} intensity={0.8} color="#f472b6" />
      <pointLight position={[0, 3, 2]} intensity={0.6} color="#fde68a" distance={12} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        minPolarAngle={Math.PI / 2 - 0.4}
        maxPolarAngle={Math.PI / 2 + 0.2}
        dampingFactor={0.1}
        rotateSpeed={0.45}
        makeDefault
      />

      <ScrollCameraRig />
      <DNAHelix />
      <ParticleField />
      <FloatingLabels />
      <VolumetricLighting />
      <Stars radius={120} depth={10} factor={2} saturation={0} fade speed={0.4} />
      <Environment preset="night" />
    </>
  )
}
