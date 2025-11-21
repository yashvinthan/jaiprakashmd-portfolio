import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CinematicScene from './canvas/CinematicScene'

export default function CanvasScene({ simpleMode }) {
  if (simpleMode) return null

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        className="h-full w-full"
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.5, 6], fov: 45, near: 0.1, far: 200 }}
      >
        <Suspense fallback={null}>
          <CinematicScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
