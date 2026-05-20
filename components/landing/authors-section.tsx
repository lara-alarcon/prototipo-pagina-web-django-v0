import Image from 'next/image'

const authors = [
  {
    name: 'Alan Turing',
    years: '1912 – 1954',
    role: 'Padre de la Computación',
    image: '/images/alan-turing.jpg',
    description:
      'Matemático británico que propuso la idea de una "máquina universal" capaz de simular cualquier proceso computacional. Su famosa Prueba de Turing (1950) planteó la pregunta central de la IA: ¿puede una máquina imitar el comportamiento inteligente humano?',
    tag: 'Prueba de Turing',
    tagColor: 'text-primary border-primary/40 bg-primary/10',
  },
  {
    name: 'John McCarthy',
    years: '1927 – 2011',
    role: 'Fundador de la IA',
    image: '/images/john-mccarthy.jpg',
    description:
      'Científico informático estadounidense que acuñó el término "Inteligencia Artificial" en 1956. Organizó la histórica Conferencia de Dartmouth, considerada el nacimiento oficial del campo. Creó también el lenguaje de programación LISP.',
    tag: 'Fundador del término IA',
    tagColor: 'text-secondary border-secondary/40 bg-secondary/10',
  },
  {
    name: 'Stuart Russell',
    years: '1962 – presente',
    role: 'Teórico de Agentes Inteligentes',
    image: '/images/stuart-russell.jpg',
    description:
      'Profesor de la Universidad de California, Berkeley, y coautor del libro de texto más influyente de IA: "Artificial Intelligence: A Modern Approach". Su trabajo en agentes inteligentes y toma de decisiones bajo incertidumbre es referencia mundial.',
    tag: 'Agentes Racionales',
    tagColor: 'text-primary border-primary/40 bg-primary/10',
  },
]

export default function AuthorsSection() {
  return (
    <section id="autores" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            — Pioneros —
          </span>
          <h2 className="mt-4 text-3xl font-bold text-balance text-foreground sm:text-4xl">
            Autores{' '}
            <span className="text-secondary">Destacados</span>
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-muted-foreground leading-relaxed">
            Las mentes brillantes que dieron forma al campo de la Inteligencia Artificial
            y sentaron las bases del mundo digital moderno.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {authors.map((author) => (
            <article
              key={author.name}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card card-hover border-glow"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                {/* Corner tag */}
                <div className={`absolute top-3 right-3 rounded-full border px-3 py-1 font-mono text-xs ${author.tagColor}`}>
                  {author.tag}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-xs text-muted-foreground">{author.years}</p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{author.name}</h3>
                <p className="font-mono text-xs text-primary">{author.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {author.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
