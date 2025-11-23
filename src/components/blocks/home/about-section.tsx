import TermWord from '@/components/term-word'
import { Heading } from '@/components/ui/heading'

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-4 tracking-wide leading-relaxed text-xs md:text-base">
      <Heading level={3}>A bit about me</Heading>
      <p>
        I&apos;m a Software Developer from Jakarta, Indonesia 🇮🇩.{' '}
        <TermWord description="Nice to meet you!">Senang berkenalan denganmu!</TermWord>
      </p>
      <p>
        This is my humble internet abode, where I sometimes blog about programming, software
        development, game development, and 3D modeling as part of my daily work. However, I mainly
        do web development, so that’s probably what you will commonly see.
      </p>
      <p>
        I love nothing more than diving into complex projects, but that doesn&apos;t mean I admire
        complexity over simplicity, quite the contrary in fact. It always amaze me how people turn a
        complex problems into a simple, digestable format for a simpleton like me to understand.
      </p>
      <p>
        As a supporter of open source, I believe that sharing knowledge and collaborating on
        projects is essential for the advancement of technologies.
      </p>
      <p>
        Oh! And before I forget, I always have this urge to say that{' '}
        <em className="text-foreground/50">
          I use{' '}
          <TermWord description="Arch Linux, a lightweight and flexible Linux® distribution that tries to Keep It Simple.">
            <em>arch</em>
          </TermWord>{' '}
          btw
        </em>
        .
      </p>
    </section>
  )
}
