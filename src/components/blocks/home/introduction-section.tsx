import { SiGithub } from '@icons-pack/react-simple-icons'

import { Mail } from 'lucide-react'

import { siteConfig } from '@/config/site'

import { Button } from '@/components/ui/button'
import TermWord from '@/components/term-word'

export default function IntroductionSection() {
  return (
    <section className="flex flex-col py-24 gap-2">
      <div className="flex items-center gap-2">
        <div className="w-16 h-[2px] bg-primary" />
        <span className="md:text-xl font-bold text-primary">Welcome, New & Old Friends!</span>
      </div>
      <span
        className="text-5xl md:text-7xl font-bold"
        style={{ textShadow: '3px 3px hsla(var(--primary) / 0.4)' }}
      >
        I'm Refansa
      </span>
      <div className="mt-4 flex flex-col">
        <span className="text-lg md:text-2xl font-bold">
          A Passionate,{' '}
          <TermWord description="College is too expensive nowadays.">
            <i>self-taught</i>
          </TermWord>{' '}
          Software Developer
        </span>
        <span className="text-lg md:text-2xl font-bold text-foreground/50">
          And a Patron of Open Source Software.
        </span>
      </div>
      <div className="mt-2 flex gap-4">
        <Button className="text-lg font-bold flex gap-2" size="lg" asChild>
          <a href={siteConfig.links.github}>
            <SiGithub />
            Github
          </a>
        </Button>
        <Button className="text-lg font-bold flex gap-2" variant="secondary" size="lg" asChild>
          <a href={siteConfig.links.email}>
            <Mail />
            Email
          </a>
        </Button>
      </div>
    </section>
  )
}
