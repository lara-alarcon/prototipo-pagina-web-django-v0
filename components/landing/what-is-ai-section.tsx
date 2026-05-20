import { Brain, Cpu, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Brain,
    title: 'Aprendizaje Automático',
    desc: 'Sistemas que aprenden de datos sin ser programados explícitamente.',
  },
  {
    icon: Cpu,
    title: 'Procesamiento Inteligente',
    desc: 'Capacidad de analizar, razonar y tomar decisiones complejas.',
  },
  {
    icon: Zap,
    title: 'Impacto Global',
    desc: 'Transforma medicina, ciencia, industria y comunicación humana.',
  },
]

export default function WhatIsAISection() {
  return (
    <section id="ia" className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            — Fundamentos —
          </span>
          <h2 className="mt-4 text-3xl font-bold text-balance text-foreground sm:text-4xl">
            ¿Qué es la{' '}
            <span className="text-primary">Inteligencia Artificial</span>?
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Text */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              La <strong className="text-foreground">Inteligencia Artificial (IA)</strong> es la rama de la informática
              que estudia cómo crear sistemas capaces de realizar tareas que normalmente requieren
              inteligencia humana: razonar, aprender, planificar, percibir el entorno y comprender el lenguaje.
            </p>
            <p>
              Desde los años 50, científicos visionarios han trabajado para dotar a las máquinas
              de capacidades cognitivas. Hoy, la IA impulsa desde los motores de búsqueda hasta
              los vehículos autónomos, pasando por los sistemas de diagnóstico médico y los
              asistentes virtuales.
            </p>
            <p>
              Su relevancia radica en su capacidad transformadora: la IA no solo automatiza tareas
              repetitivas, sino que abre nuevas fronteras del conocimiento científico y permite
              resolver problemas que antes eran inabordables para los humanos.
            </p>

            <div className="mt-6 rounded border border-primary/20 bg-primary/5 p-4">
              <p className="font-mono text-xs text-primary/80">
                "La IA es probablemente la tecnología más transformadora de nuestra era, con el
                potencial de abordar los mayores desafíos de la humanidad."
              </p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">— Stuart Russell</p>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-lg border border-border/50 bg-card p-5 card-hover border-glow"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
