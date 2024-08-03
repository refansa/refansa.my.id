import { siteConfig } from '@/config/site'

import { Heading } from '@/components/ui/heading'
import Anchor from '@/components/anchor'

export default function ContactSection() {
  return (
    <section className="flex flex-col gap-4 text-xs md:text-base tracking-wide leading-relaxed">
      <Heading level={3}>Contact</Heading>
      <div className="flex flex-col gap-2">
        <span>
          Email: <Anchor href={siteConfig.links.email}>{siteConfig.email}</Anchor>
        </span>
        <span>
          Tel: <Anchor href={siteConfig.links.tel}>{siteConfig.tel}</Anchor>
        </span>
      </div>
    </section>
  )
}
