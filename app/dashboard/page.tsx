import { Brain, BookOpen, Lightbulb, Target } from 'lucide-react'

const keyConceptCards = [
  {
    icon: Brain,
    title: 'Definición de Alan Turing (1950)',
    color: 'text-primary border-primary/30 bg-primary/5',
    iconColor: 'text-primary',
    content:
      'En su artículo "Computing Machinery and Intelligence", Turing propuso la pregunta: "¿Pueden pensar las máquinas?" Diseñó la Prueba de Turing: si una máquina puede mantener una conversación que sea indistinguible de la de un humano, podría considerarse inteligente. Este marco conceptual definió décadas de investigación en IA.',
  },
  {
    icon: BookOpen,
    title: 'Definición de John McCarthy (1956)',
    color: 'text-secondary border-secondary/30 bg-secondary/5',
    iconColor: 'text-secondary',
    content:
      'McCarthy, en la Conferencia de Dartmouth de 1956, definió la Inteligencia Artificial como "la ciencia e ingeniería de hacer máquinas inteligentes, especialmente programas informáticos inteligentes". Esta definición fundacional estableció la IA como disciplina científica independiente y trazó el camino para décadas de investigación.',
  },
  {
    icon: Target,
    title: 'Definición de Stuart Russell (1995)',
    color: 'text-primary border-primary/30 bg-primary/5',
    iconColor: 'text-primary',
    content:
      'En su libro "Artificial Intelligence: A Modern Approach", Russell define la IA desde la perspectiva de los agentes racionales: sistemas que perciben su entorno y actúan para maximizar el logro de sus objetivos. Esta visión moderna integra probabilidad, aprendizaje automático y toma de decisiones bajo incertidumbre.',
  },
  {
    icon: Lightbulb,
    title: 'Definición Moderna Integral',
    color: 'text-secondary border-secondary/30 bg-secondary/5',
    iconColor: 'text-secondary',
    content:
      'Actualmente, la IA se define como el conjunto de teorías y técnicas que permiten a las máquinas simular la inteligencia humana: razonar, aprender de la experiencia, adaptarse a nuevas situaciones, entender el lenguaje natural, reconocer patrones, resolver problemas complejos y realizar tareas que históricamente requerían inteligencia humana.',
  },
]

const aiApplications = [
  { area: 'Medicina', example: 'Diagnóstico por imágenes, descubrimiento de fármacos' },
  { area: 'Transporte', example: 'Vehículos autónomos, optimización de rutas' },
  { area: 'Lenguaje', example: 'Traductores automáticos, asistentes virtuales' },
  { area: 'Finanzas', example: 'Detección de fraudes, trading algorítmico' },
  { area: 'Arte', example: 'Generación de imágenes, música y texto por IA' },
  { area: 'Ciencia', example: 'Plegamiento de proteínas (AlphaFold), clima' },
]

export default function DefinicionPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Page header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Módulo 01</span>
          <span className="h-px flex-1 bg-border/50" />
        </div>
        <h1 className="text-3xl font-bold text-foreground text-balance">
          Definición de{' '}
          <span className="text-primary">Inteligencia Artificial</span>
        </h1>
        <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
          La Inteligencia Artificial no tiene una definición única universal. A lo largo de la historia,
          diferentes científicos y filósofos han propuesto enfoques que reflejan tanto la evolución de la
          tecnología como la comprensión cambiante de la inteligencia misma.
        </p>
      </div>

      {/* Intro block */}
      <div className="rounded-xl border border-border/50 bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">¿Qué es la Inteligencia Artificial?</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            La Inteligencia Artificial (IA) es la rama de la ciencia computacional que estudia cómo crear
            sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Esto incluye
            el razonamiento, el aprendizaje a partir de la experiencia, la comprensión del lenguaje natural,
            el reconocimiento de patrones visuales y la toma de decisiones complejas.
          </p>
          <p>
            Desde sus inicios formales en los años 50, la IA ha evolucionado de simples reglas lógicas
            programadas manualmente hasta sistemas de deep learning capaces de superar a los humanos en tareas
            específicas como el juego de Go, el diagnóstico médico o la traducción de idiomas.
          </p>
          <p>
            La IA no es una tecnología única, sino un campo interdisciplinario que combina matemáticas,
            estadística, neurociencia, lingüística, filosofía e ingeniería para crear sistemas cada vez
            más sofisticados que amplían las capacidades humanas.
          </p>
        </div>
      </div>

      {/* Key definitions */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Perspectivas de los Pioneros
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {keyConceptCards.map(({ icon: Icon, title, color, iconColor, content }) => (
            <div key={title} className={`rounded-xl border p-5 ${color} card-hover`}>
              <div className="flex items-start gap-3 mb-3">
                <Icon className={`h-5 w-5 mt-0.5 shrink-0 ${iconColor}`} />
                <h3 className="font-semibold text-foreground text-sm leading-snug">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-xl border border-border/50 bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">Hitos Históricos de la IA</h2>
        <div className="relative space-y-0">
          {[
            { year: '1950', event: 'Alan Turing publica "Computing Machinery and Intelligence" y propone la Prueba de Turing.' },
            { year: '1956', event: 'John McCarthy acuña el término "Inteligencia Artificial" en la Conferencia de Dartmouth.' },
            { year: '1969', event: 'Shakey, el primer robot móvil con razonamiento, es desarrollado en Stanford.' },
            { year: '1986', event: 'Geoffrey Hinton populariza el algoritmo de retropropagación para entrenar redes neuronales.' },
            { year: '1997', event: 'Deep Blue de IBM vence al campeón mundial de ajedrez Garry Kasparov.' },
            { year: '2012', event: 'AlexNet de Krizhevsky, Sutskever e Hinton revoluciona el reconocimiento de imágenes con deep learning.' },
            { year: '2016', event: 'AlphaGo de DeepMind vence al campeón mundial del juego de Go, Lee Sedol.' },
            { year: '2022', event: 'ChatGPT de OpenAI alcanza 100 millones de usuarios en 2 meses, la app de más rápido crecimiento.' },
          ].map(({ year, event }, i) => (
            <div key={year} className="flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-16 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10">
                  <span className="font-mono text-xs font-bold text-primary">{year}</span>
                </div>
                {i < 7 && <div className="mt-1 h-full w-px bg-primary/20" />}
              </div>
              <p className="pt-1.5 text-sm text-muted-foreground leading-relaxed">{event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-5">Aplicaciones Actuales de la IA</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {aiApplications.map(({ area, example }) => (
            <div
              key={area}
              className="rounded-lg border border-border/50 bg-card p-4 card-hover border-glow"
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary mb-1">{area}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{example}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
