import { Suspense, useState } from 'react'
import { Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Modelo } from './Canvas/Isla'
import Footer from './components/Footer'
import HeroTitle from './components/HeroTitle'
import Navbar from './components/Navbar'

function App() {
  const [showHeroTitle, setShowHeroTitle] = useState(true)

  return (
    <div className="relative h-[100dvh] overflow-hidden">
      <div className="fixed inset-0">
        <Canvas camera={{ position: [-8000, 2000, 5000], fov: 70 }}>
          <Environment
            files="/hd.jpg"
            background
            backgroundIntensity={0.35}
          />

          <Suspense fallback={null}>
            <Stage
              environment="city"
              adjustCamera={1.5}
              intensity={0.2}
            >
              <Modelo scale={0.1} />
            </Stage>
          </Suspense>

          <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={0.5}
            enablePan={false}
            enableRotate
            enableZoom={false}
          />
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto absolute inset-x-0 top-0">
          <Navbar
            showHeroTitle={showHeroTitle}
            onToggleHeroTitle={() => setShowHeroTitle((value) => !value)}
          />
        </div>

        {showHeroTitle ? (
          <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 md:px-6">
            <HeroTitle />
          </div>
        ) : null}

        <div className="pointer-events-auto absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
