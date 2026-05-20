import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">
                Plataforma Educativa
              </span>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Explorando la{' '}
              <span className="text-primary text-glow-green">
                Inteligencia
              </span>{' '}
              <span className="text-secondary text-glow-cyan">
                Artificial
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              Descubre el fascinante mundo de la IA: desde sus fundamentos históricos
              hasta las redes neuronales más avanzadas. Una guía completa para
              entender la tecnología que está transformando el mundo.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/login"
                className="group flex items-center gap-2 rounded border border-primary bg-primary px-6 py-3 font-mono text-sm font-bold tracking-wider text-primary-foreground uppercase transition-all hover:bg-primary/90 glow-green"
              >
                Iniciar sesión
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#ia"
                className="flex items-center gap-2 rounded border border-border px-6 py-3 font-mono text-sm tracking-wider text-muted-foreground uppercase transition-colors hover:border-primary/50 hover:text-primary"
              >
                Explorar contenido
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative flex-1 flex justify-center">
            <div className="relative h-[400px] w-[340px] sm:h-[480px] sm:w-[400px]">
              <div className="absolute inset-0 rounded-2xl border border-primary/20 bg-card/50" />
              <div className="absolute -inset-1 rounded-2xl border border-primary/10" />
              <Image
                src="/images/hero-robot.jpg"
                alt="Robot de Inteligencia Artificial"
                fill
                className="rounded-2xl object-cover"
                priority
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 rounded-b-2xl bg-gradient-to-t from-background to-transparent" />
              {/* Corner decorations */}
              <div className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-secondary" />
              <div className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-secondary" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a href="/#ia" className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors">
            <span className="font-mono text-xs tracking-widest uppercase">Continuar</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
