import { Cpu } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded border border-primary/50 bg-primary/10">
              <Cpu className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-primary">
              IA<span className="text-foreground">.edu</span>
            </span>
          </div>

          {/* Info */}
          <div className="text-center font-mono text-xs text-muted-foreground leading-relaxed">
            <p className="text-foreground/70">Estudiante: <span className="text-primary">Tu Nombre Aquí</span></p>
            <p>Curso: Introducción a la Inteligencia Artificial</p>
            <p>Universidad / Instituto — Año 2025</p>
          </div>

          {/* Right */}
          <div className="font-mono text-xs text-muted-foreground text-right">
            <p>Plataforma Educativa</p>
            <p className="text-primary/70">© 2025 IA.edu</p>
          </div>
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <p className="mt-4 text-center font-mono text-xs text-muted-foreground/50">
          Construido con fines educativos · Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
