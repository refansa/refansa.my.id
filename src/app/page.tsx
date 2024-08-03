import DefaultLayout from '@/components/layouts/DefaultLayout'
import IntroductionSection from '@/components/blocks/home/introduction-section'
import AboutSection from '@/components/blocks/home/about-section'
import ContactSection from '@/components/blocks/home/contact-section'

export default function Home() {
  return (
    <DefaultLayout>
      <main className="flex flex-col gap-24 mb-24">
        <IntroductionSection />
        <AboutSection />
        <ContactSection />
      </main>
    </DefaultLayout>
  )
}
