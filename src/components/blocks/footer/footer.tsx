'use client'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-1 items-center mb-8 text-xs md:text-base">
      <p className="font-semibold text-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  )
}
