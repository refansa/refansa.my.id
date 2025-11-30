import type { Metadata } from 'next'
import DefaultLayout from '@/components/layouts/default-layout'
import IntroductionSection from '@/components/blocks/home/introduction-section'
import AboutSection from '@/components/blocks/home/about-section'
import ContactSection from '@/components/blocks/home/contact-section'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  description:
    'Muhammad Refansa Ali Muzky - A passionate Software Developer from Jakarta, Indonesia. Patron of Open Source Software Movement.',
  tags: [
    'Muhammad Refansa Ali Muzky',
    'Refansa',
    'Software Developer',
    'Web Developer',
    'Jakarta',
    'Indonesia',
    'Open Source',
    'Portfolio',
  ],
})

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
