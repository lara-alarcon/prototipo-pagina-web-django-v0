'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Brain, Network, Layers, Users, Cpu, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', label: 'Definición de IA', icon: Brain },
  { href: '/dashboard/redes-neuronales', label: 'Redes Neuronales', icon: Network },
  { href: '/dashboard/tipos-de-redes', label: 'Tipos de Redes', icon: Layers },
  { href: '/dashboard/autores', label: 'Autores', icon: Users },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const NavContent = () => (
    <>
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-border/50">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/50 bg-primary/10">
          <Cpu className="h-4 w-4 text-primary" />
        </div>
        <span className="font-mono text-sm font-bold text-primary">
          IA<span className="text-foreground">.edu</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <p className="px-3 mb-3 font-mono text-xs text-muted-foreground/60 uppercase tracking-widest">
          Contenido
        </p>
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-wider transition-all',
                active
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent',
              )}
            >
              <Icon className={cn('h-4 w-4 shrink-0', active ? 'text-primary' : '')} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border/50 px-4 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-destructive transition-colors uppercase tracking-wider"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </Link>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="fixed top-4 left-4 z-50 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? <X className="h-4 w-4 text-foreground" /> : <Menu className="h-4 w-4 text-foreground" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 flex h-full w-64 flex-col bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <NavContent />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex h-screen w-64 shrink-0 flex-col bg-sidebar border-r border-sidebar-border sticky top-0">
        <NavContent />
      </aside>
    </>
  )
}
