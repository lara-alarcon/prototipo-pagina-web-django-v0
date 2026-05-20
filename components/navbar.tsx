'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'IA', href: '/#ia' },
  { label: 'Autores', href: '/#autores' },
  { label: 'Login', href: '/login' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/50 bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Cpu className="h-4 w-4 text-primary" />
          </div>
          <span className="font-mono text-sm font-bold tracking-widest text-primary uppercase">
            IA<span className="text-foreground">.edu</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'font-mono text-xs tracking-widest uppercase transition-colors',
                  link.href === '/login'
                    ? 'rounded border border-primary/50 px-4 py-1.5 text-primary hover:bg-primary hover:text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block font-mono text-xs tracking-widest uppercase transition-colors',
                    link.href === '/login'
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
