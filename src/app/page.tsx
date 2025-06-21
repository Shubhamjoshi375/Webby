import HeroSection from "@/components/ui/HeroSection"
import FeatureSection from "@/components/ui/FeatureSection"
import TrustedSection from "@/components/ui/TrustedSection"
import CTASection from "@/components/ui/CTASection"
import About from "@/components/ui/About"
import BannerCTA from "@/components/ui/BannerCTA"
import Partners from "@/components/ui/Partners"
import Cards from "@/components/ui/Cards"
import DarkCTA from "@/components/ui/DarkCTA"
import QuoteForm from "@/components/ui/QuoteForm"
import AppPromo from "@/components/ui/AppPromo"
import Gallery from "@/components/ui/Gallery"
import FeatureCards from "@/components/ui/FeatureCards"
import Testimonial from "@/components/ui/Testimonial"
import FAQ from "@/components/ui/FAQ"
import Footer from "@/components/ui/Footer"
import InfoSection from "@/components/ui/section"


export default function Home() {
  return (
    <main>
      <HeroSection />
       <About />

     <InfoSection/> <FeatureCards />

      {/* <BannerCTA />
      <Partners />
      <Cards />
           <FeatureSection />
      <DarkCTA />
      <QuoteForm />
      <AppPromo />
      <Gallery />
     
      <Testimonial />
      <CTASection />
      <FAQ />
      <Footer /> */}
    </main>
  )
}