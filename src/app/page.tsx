import Header from '@/components/blocks/header/header'
import Footer from '@/components/blocks/footer/footer'
import AboutSection from '@/components/blocks/home/about-section'
import ContactSection from '@/components/blocks/home/contact-section'
import IntroductionSection from '@/components/blocks/home/introduction-section'

export default function Home() {
  return (
    <div className="max-w-screen-lg w-full mx-auto px-6">
      <Header />
      <main className="flex flex-col gap-24 mb-24">
        <IntroductionSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
