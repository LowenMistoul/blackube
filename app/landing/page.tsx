"use client"
import Link from 'next/link'
import '../style/style.css'
import { Box, Menu as MenuIcon } from 'lucide-react'
import { useState, useRef } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import * as THREE from 'three'
import { Button } from "@/components/ui/button"
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
function Cube() {
 const meshRef = useRef<THREE.Mesh>(null!)
 const buttonRef = useRef<ThreeElements['mesh']>(null!)
 
 useFrame((state, delta) => {
   meshRef.current.rotation.x += delta * 0.2
   meshRef.current.rotation.y += delta * 0.3
 })
 
 return (
   <group >
     <mesh ref={meshRef}>
       <boxGeometry  args={[1.5, 1.5, 1.5]} />
       <meshStandardMaterial color={"white"} wireframe />
     </mesh>
   </group>
 )
}
 
export default function HomePage() {
 const [currentPage, setCurrentPage] = useState('Home')
 //const [showContent, setShowContent] = useState(false)
 
 const handlePageChange = (page: string) => {
   setCurrentPage(page)
 }
 
 return (
   <div className="min-h-screen bg-black relative overflow-hidden">
     {/* Enhanced space background */}
     <div className="absolute inset-0">
       <div className="stars"></div>
       <div className="stars2"></div>
       <div className="stars3"></div>
       <div className="stars4"></div>
       <div className="nebula"></div>
     </div>
 
     {/* Navigation - Always visible */}
     <nav className="relative z-20 flex justify-between items-center p-4 h-16">
       <Link href="/services" onClick={() => handlePageChange('Services')} className="flex items-center text-white hover:text-gray-300 transition-colors">
         <Box className="w-5 h-5 mr-2" />
         <span className="font-semibold">BLACKUBE</span>
       </Link>
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
           <Button variant="ghost" size="icon" className="text-white">
             <MenuIcon className="h-6 w-6" />
           </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56 bg-black border border-gray-800">
           <DropdownMenuItem asChild>
             <Link href="/" onClick={() => handlePageChange('Home')} className={`${currentPage === 'Home' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}>
               Home
             </Link>
           </DropdownMenuItem>
           <DropdownMenuItem asChild>
             <Link href="/services" onClick={() => handlePageChange('Services')} className={`${currentPage === 'Services' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}>
               Services
             </Link>
           </DropdownMenuItem>
           <DropdownMenuItem asChild>
             <Link href="/contact" onClick={() => handlePageChange('Contact')} className={`${currentPage === 'Contact' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}>
               Contact
             </Link>
           </DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
     </nav>
 
     {/* 3D Cube */}
     <div className="absolute inset-0 z-10 btnn">
       <Canvas camera={{ position: [0, 0, 3] }}>
         <ambientLight intensity={0.5} />
         <pointLight position={[10, 10, 10]} intensity={1} />
         <Cube />
         <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
       </Canvas>
     </div>
 
     {/* Main Content */}
     {(
       <main className="relative z-20 flex items-center justify-center h-[calc(100vh-4rem)]">
         <div className="text-center">
           <h1 className="text-4xl font-bold text-white mb-4">Welcome to BLACKUBE</h1>
           <p className="text-xl text-gray-300 mb-8">Explore the future of technology</p>
           <Button className="bg-white text-black hover:bg-gray-200">
            <Link href="/services"  onClick={() => handlePageChange('Services')} className={`${currentPage === 'Services' ? 'text-white' : 'text-black-400'} hover:text-white transition-colors`}>
             Get Started
             </Link>
           </Button>
         </div>
       </main>
     )}
 
     <footer className="fixed bottom-0 left-0 right-0 z-20 p-4">
       <div className="text-center text-gray-400 text-sm">
         © 2024 BLACKUBE. All rights reserved.
       </div>
     </footer>
 
     {/* CSS for enhanced space background */}
     {/* <style jsx>{`

     `}</style> */}
   </div>
 )
}