import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

function Box() {
  return (
    <mesh rotation={[-10, -10, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.10} />
        <pointLight position={[100, 10, 10]} />
        <Box />
        <Stars />
        <OrbitControls /> {/* Permite mover la cámara con el ratón */}
      </Canvas>
    </div>
  )
}