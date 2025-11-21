import { useRef, useState, useCallback } from 'react'
import {
  EffectComposer,
  Bloom,
  GodRays,
  Noise,
  Vignette,
  DepthOfField,
  ChromaticAberration,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function VolumetricLighting() {
  const sunRef = useRef()
  const [sunReady, setSunReady] = useState(false)
  const setSunNode = useCallback((node) => {
    sunRef.current = node || null
    setSunReady(Boolean(node))
  }, [])

  return (
    <>
      <mesh ref={setSunNode} position={[0, 6, -6]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#4cc9f0" toneMapped={false} />
      </mesh>

      {sunReady && (
        <EffectComposer multisampling={0}>
          <DepthOfField focusDistance={0.015} focalLength={0.02} bokehScale={4.5} height={480} />
          <Bloom intensity={1.1} luminanceThreshold={0.15} luminanceSmoothing={0.9} mipmapBlur />
          <GodRays
            sun={sunRef}
            samples={80}
            density={0.96}
            decay={0.96}
            weight={0.3}
            exposure={0.42}
            clampMax={1}
          />
          <ChromaticAberration offset={[0.0005, 0.0012]} radialModulation />
          <Noise premultiply blendFunction={BlendFunction.SCREEN} opacity={0.04} />
          <Vignette eskil offset={0.2} darkness={0.35} />
        </EffectComposer>
      )}
    </>
  )
}
