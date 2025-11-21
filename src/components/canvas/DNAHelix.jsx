import { useFrame } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import { CatmullRomCurve3, CylinderGeometry, Color, Matrix4, Quaternion, TubeGeometry, Vector3 } from 'three'

/**
 * Realistic 3D DNA Double Helix Component
 * 
 * Creates a scientifically accurate DNA structure using:
 * - Two thin helical backbone tubes (chrome-metallic)
 * - Thin cylindrical rungs connecting the helices with zero gaps
 * - Proper DNA twist (10 base pairs per turn, 36° per base pair)
 * - Even spacing and correct rung angles
 */

// DNA Structure Parameters
const BASE_PAIRS = 40 // Number of base pairs (rungs)
const HELIX_RADIUS = 0.8 // Distance from center to each helix
const HELIX_TWIST = (2 * Math.PI) / 10 // 10 base pairs per full turn (36° per base pair)
const HELIX_RISE = 0.34 // Vertical rise per base pair (in DNA units)
const TOTAL_HEIGHT = BASE_PAIRS * HELIX_RISE

// Geometry Parameters
const BACKBONE_RADIUS = 0.04 // Thin cylindrical backbone tubes
const RUNG_RADIUS = 0.018 // Thin cylindrical rungs
const TUBE_SEGMENTS = 64 // Smoothness of the helical tubes
const CYLINDER_SEGMENTS = 16 // Smoothness of the rungs

// Rung colors for variation (gold, blue, pink)
const RUNG_COLORS = ['#fbbf24', '#60a5fa', '#f472b6', '#a78bfa']

export default function DNAHelix() {
  const groupRef = useRef()
  const rungsRef = useRef()

  // Generate helix curve points for both backbones
  const helixCurves = useMemo(() => createHelixCurves(), [])
  
  // Generate rung data (position, rotation, length) using the actual curves
  const rungData = useMemo(() => createRungs(helixCurves), [helixCurves])
  
  // Create tube geometries for the two backbones
  const backboneGeometries = useMemo(() => {
    const leftGeometry = new TubeGeometry(helixCurves.left, TUBE_SEGMENTS, BACKBONE_RADIUS, 32, false)
    const rightGeometry = new TubeGeometry(helixCurves.right, TUBE_SEGMENTS, BACKBONE_RADIUS, 32, false)
    return [leftGeometry, rightGeometry]
  }, [helixCurves])

  // Create cylinder geometry for rungs (instanced)
  const rungGeometry = useMemo(() => {
    return new CylinderGeometry(RUNG_RADIUS, RUNG_RADIUS, 1, CYLINDER_SEGMENTS)
  }, [])

  // Cleanup geometries on unmount
  useEffect(() => {
    return () => {
      backboneGeometries.forEach((geo) => geo.dispose())
      rungGeometry.dispose()
    }
  }, [backboneGeometries, rungGeometry])

  // Apply instance matrices and colors to rungs
  useLayoutEffect(() => {
    if (!rungsRef.current) return

    const tempMatrix = new Matrix4()
    const tempScale = new Vector3()
    const tempColor = new Color()

    rungData.forEach((rung, index) => {
      // Scale cylinder to match rung length
      // CylinderGeometry height is 1, so we scale Y by length (extends from -0.5 to +0.5)
      tempScale.set(1, rung.length, 1)
      tempMatrix.compose(rung.position, rung.quaternion, tempScale)
      rungsRef.current.setMatrixAt(index, tempMatrix)

      // Set color variation for rungs (gold/blue/pink)
      tempColor.set(RUNG_COLORS[index % RUNG_COLORS.length])
      rungsRef.current.setColorAt(index, tempColor)
    })

    rungsRef.current.instanceMatrix.needsUpdate = true
    if (rungsRef.current.instanceColor) {
      rungsRef.current.instanceColor.needsUpdate = true
    }
  }, [rungData])

  // Slow rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1 // Slow continuous rotation
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Left Helix Backbone - Dark Chrome */}
      <mesh geometry={backboneGeometries[0]}>
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Right Helix Backbone - Dark Chrome */}
      <mesh geometry={backboneGeometries[1]}>
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={1}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* DNA Rungs - Thin Cylindrical Rods with Color Variation */}
      <instancedMesh ref={rungsRef} args={[rungGeometry, undefined, BASE_PAIRS]}>
        <meshPhysicalMaterial
          color="#fbbf24"
          metalness={0.9}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#f59e0b"
          emissiveIntensity={0.2}
          vertexColors
        />
      </instancedMesh>
    </group>
  )
}

/**
 * Creates parametric curves for both DNA helix backbones
 * Uses proper DNA geometry: two helices offset by 180° (π radians)
 */
function createHelixCurves() {
  const leftPoints = []
  const rightPoints = []

  // Generate points along the helix
  const numPoints = BASE_PAIRS * 4 // Smooth curve with 4 points per base pair
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints
    const angle = t * BASE_PAIRS * HELIX_TWIST
    const height = (t - 0.5) * TOTAL_HEIGHT

    // Left helix (offset by 0°)
    const leftX = Math.cos(angle) * HELIX_RADIUS
    const leftZ = Math.sin(angle) * HELIX_RADIUS
    leftPoints.push(new Vector3(leftX, height, leftZ))

    // Right helix (offset by 180° = π radians)
    const rightX = Math.cos(angle + Math.PI) * HELIX_RADIUS
    const rightZ = Math.sin(angle + Math.PI) * HELIX_RADIUS
    rightPoints.push(new Vector3(rightX, height, rightZ))
  }

  // Create smooth CatmullRom curves from the points
  const leftCurve = new CatmullRomCurve3(leftPoints, false, 'catmullrom', 0.5)
  const rightCurve = new CatmullRomCurve3(rightPoints, false, 'catmullrom', 0.5)

  return { left: leftCurve, right: rightCurve }
}

/**
 * Creates rung data for connecting the two helices
 * Each rung is a thin cylinder that perfectly connects both helices with zero gap
 * Uses the actual helix curves to ensure perfect connection
 */
function createRungs(helixCurves) {
  const rungs = []
  const up = new Vector3(0, 1, 0)

  for (let i = 0; i < BASE_PAIRS; i++) {
    const t = i / (BASE_PAIRS - 1)

    // Get exact positions on the helix curves (ensures zero gap)
    const leftPos = helixCurves.left.getPoint(t)
    const rightPos = helixCurves.right.getPoint(t)

    // Calculate direction vector from left to right helix
    const direction = new Vector3().subVectors(rightPos, leftPos)
    const length = direction.length()
    const normalizedDir = direction.clone().normalize()

    // Position at the midpoint (center of the rung)
    const midpoint = new Vector3().addVectors(leftPos, rightPos).multiplyScalar(0.5)

    // Create quaternion to orient the cylinder along the direction
    // The cylinder geometry is created along Y-axis, so we rotate it to match the direction
    // This ensures the rung perfectly connects both helices with zero gap
    const quaternion = new Quaternion().setFromUnitVectors(up, normalizedDir)

    rungs.push({
      position: midpoint,
      quaternion: quaternion,
      length: length,
    })
  }

  return rungs
}
