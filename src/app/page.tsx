import HeroSection from "@/components/ui/HeroSection"

import About from "@/components/ui/About"

import FeatureCards from "@/components/ui/FeatureCards"

import InfoSection from "@/components/ui/section"


export default function Home() {
  return (
    <main>
      <HeroSection />
       <About />

     <InfoSection/> <FeatureCards />

      
    </main>
  )
}