"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Box, Menu as MenuIcon, Film, Shield, Zap, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
export default function ServicesPage() {
 const [currentPage, setCurrentPage] = useState('Services')
 
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
       <div className="stars5"></div>
       <div className="stars6"></div>
       <div className="css-stars"></div>
       <div className="css-stars2"></div>
       <div className="nebula"></div>
     </div>
 
     {/* Navigation - Always visible */}
     <nav className="relative z-20 flex justify-between items-center p-4 h-16">
       <Link href="/" onClick={() => handlePageChange('Home')} className="flex items-center text-white hover:text-gray-300 transition-colors">
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
             <Link href="/services" onClick={() => handlePageChange('Services')} className={`${currentPage === 'Services' ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors flex items-center`}>
               <Settings className="mr-2 h-4 w-4" />
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
 
     {/* Main Content */}
     <main className="relative z-20 flex items-center justify-center min-h-[calc(100vh-4rem)]">
       <div className="w-full max-w-6xl p-8 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm">
         <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Services</h1>
         <div className="grid md:grid-cols-3 gap-8">
           <Link href="/media" passHref>
             <Card className="bg-gray-900 border-gray-800 cursor-pointer transition-all hover:bg-gray-800">
               <CardHeader>
                 <CardTitle className="flex items-center text-white">
                   <Film className="w-6 h-6 mr-2" />
                   203 Media
                 </CardTitle>
               </CardHeader>
               <CardContent>
                 <CardDescription className="text-gray-400">
                   Explore our cutting-edge media solutions and services designed to elevate your brand and engage your audience.
                 </CardDescription>
               </CardContent>
             </Card>
           </Link>
           <Card className="bg-gray-900 border-gray-800">
             <CardHeader>
               <CardTitle className="flex items-center text-white">
                 <Shield className="w-6 h-6 mr-2" />
                 Technology Solution
               </CardTitle>
             </CardHeader>
             <CardContent>
               <CardDescription className="text-gray-400">
                 Leverage our cutting-edge technology solutions to streamline your operations, enhance productivity, and stay ahead in the digital landscape.
               </CardDescription>
             </CardContent>
           </Card>
           <Card className="bg-gray-900 border-gray-800">
             <CardHeader>
               <CardTitle className="flex items-center text-white">
                 <Zap className="w-6 h-6 mr-2" />
                 AI Integration
               </CardTitle>
             </CardHeader>
             <CardContent>
               <CardDescription className="text-gray-400">
                 Harness the power of artificial intelligence to revolutionize your business processes and decision-making.
               </CardDescription>
             </CardContent>
           </Card>
         </div>
       </div>
     </main>
 
     <footer className="fixed bottom-0 left-0 right-0 z-20 p-4">
       <div className="text-center text-gray-400 text-sm">
         © 2024 BLACKUBE. All rights reserved.
       </div>
     </footer>
 
     {/* CSS for enhanced space background */}
     <style jsx>{`
       @keyframes move-background {
         from {
           transform: translate3d(0px, 0px, 0px);
         }
         to {
           transform: translate3d(1000px, 0px, 0px);
         }
       }
 
       @keyframes twinkle {
         0% { opacity: 0.5; }
         50% { opacity: 1; }
         100% { opacity: 0.5; }
       }
 
       .stars {
         background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         display: block;
         z-index: 0;
         animation: move-background 70s linear infinite;
       }
 
       .stars2 {
         background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars2.png) repeat;
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         display: block;
         z-index: 1;
         animation: move-background 100s linear infinite;
       }
 
       .stars3 {
         background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars3.png) repeat;
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         display: block;
         z-index: 2;
         animation: move-background 150s linear infinite;
       }
 
       .stars4 {
         background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         display: block;
         z-index: 3;
         animation: move-background 200s linear infinite, twinkle 3s ease-in-out infinite;
       }
 
       .stars5 {
         background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars2.png) repeat;
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         display: block;
         z-index: 4;
         animation: move-background 250s linear infinite, twinkle 4s ease-in-out infinite;
       }
 
       .stars6 {
         background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars3.png) repeat;
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         display: block;
         z-index: 5;
         animation: move-background 300s linear infinite, twinkle 5s ease-in-out infinite;
       }
 
       .css-stars, .css-stars2 {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         pointer-events: none;
       }
 
       .css-stars::after, .css-stars2::after {
         content: "";
         position: absolute;
         top: -10rem;
         left: -10rem;
         width: calc(100% + 20rem);
         height: calc(100% + 20rem);
         animation: animateStars 100s linear infinite;
         background-image: radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                           radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                           radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)),
                           radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
         background-repeat: repeat;
         background-size: 200px 200px;
       }
 
       .css-stars::after {
         opacity: 0.5;
       }
 
       .css-stars2::after {
         background-image: radial-gradient(2px 2px at 25px 35px, #eee, rgba(0,0,0,0)),
                           radial-gradient(2px 2px at 50px 80px, #fff, rgba(0,0,0,0)),
                           radial-gradient(1px 1px at 100px 50px, #fff, rgba(0,0,0,0)),
                           radial-gradient(2px 2px at 175px 135px, #ddd, rgba(0,0,0,0));
         background-size: 250px 250px;
         animation: animateStars 150s linear infinite;
       }
 
       @keyframes animateStars {
         from {
           transform: translateY(0);
         }
         to {
           transform: translateY(-2000px);
         }
       }
 
       .nebula {
         position: absolute;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         display: block;
         z-index: 8;
         background:
           radial-gradient(circle at 20% 80%, rgba(26, 0, 77, 0.3) 0%, transparent 50%),
           radial-gradient(circle at 80% 20%, rgba(0, 77, 26, 0.3) 0%, transparent 50%);
         animation: move-background 300s linear infinite;
       }
     `}</style>
   </div>
 )
}