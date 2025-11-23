import HeaderNavigation from './header-navigation'

export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-xl bg-background/80 z-50">
      <HeaderNavigation />
    </header>
  )
}
