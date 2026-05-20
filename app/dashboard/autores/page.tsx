import Image from 'next/image'
import { Award } from 'lucide-react'

const authors = [
  {
    name: 'Geoffrey Hinton',
    title: 'El Padrino del Deep Learning',
    years: 'Nacido en 1947, Londres, Reino Unido',
    image: '/images/geoffrey-hinton.jpg',
    award: 'Premio Turing 2018',
    tags: ['Deep Learning', 'Backpropagation', 'Boltzmann Machines'],
    bio: 'Considerado el "Padrino del Deep Learning", Geoffrey Hinton es el científico más influyente en el desarrollo de las redes neuronales profundas. Trabajó durante décadas en la Universidad de Toronto y luego en Google Brain, cuando el deep learning era ignorado por la comunidad científica.',
    contributions: [
      'Popularizó el algoritmo de retropropagación (backpropagation) en 1986, que es la base del entrenamiento de redes neuronales modernas.',
      'Desarrolló las Máquinas de Boltzmann Restringidas (RBM) y el Preentrenamiento No Supervisado, técnicas cruciales para el aprendizaje profundo.',
      'En 2012, su equipo creó AlexNet, que revolucionó el campo al ganar la competencia ImageNet con un margen histórico usando GPU y deep learning.',
      'En 2023, dejó Google para hablar libremente sobre los riesgos existenciales de la IA. En 2024, recibió el Premio Nobel de Física por sus contribuciones.',
    ],
  },
  {
    name: 'Yann LeCun',
    title: 'Padre de las Redes Convolucionales',
    years: 'Nacido en 1960, París, Francia',
    image: '/images/yann-lecun.jpg',
    award: 'Premio Turing 2018',
    tags: ['CNN', 'Computer Vision', 'Self-Supervised Learning'],
    bio: 'Yann LeCun es el creador de las Redes Neuronales Convolucionales (CNN), la arquitectura que transformó la visión por computadora. Actualmente es Chief AI Scientist de Meta y profesor en la Universidad de Nueva York.',
    contributions: [
      'Desarrolló LeNet-5 en 1998 para el reconocimiento de dígitos escritos a mano, la primera CNN práctica aplicada al mundo real por los bancos para leer cheques.',
      'Sus investigaciones sentaron las bases de toda la visión computacional moderna: reconocimiento facial, coches autónomos y diagnóstico médico.',
      'Promueve el aprendizaje autosupervisado (self-supervised learning) como el camino hacia la inteligencia general artificial.',
      'Dirige el laboratorio FAIR (Fundamental AI Research) de Meta, uno de los más productivos del mundo.',
    ],
  },
  {
    name: 'Yoshua Bengio',
    title: 'Pionero del Aprendizaje Profundo',
    years: 'Nacido en 1964, París, Francia',
    image: '/images/yoshua-bengio.jpg',
    award: 'Premio Turing 2018',
    tags: ['NLP', 'Generative Models', 'AI Safety'],
    bio: 'Yoshua Bengio es uno de los tres "Godfathers of AI" junto con Hinton y LeCun. Profesor en la Universidad de Montreal y fundador del MILA (Montreal Institute for Learning Algorithms), es conocido por su trabajo en procesamiento de lenguaje natural y modelos generativos.',
    contributions: [
      'Realizó avances fundamentales en el aprendizaje de representaciones del lenguaje con modelos de lenguaje neurales, precursores de GPT y BERT.',
      'Introdujo el mecanismo de atención en redes recurrentes, un precursor directo de la arquitectura Transformer que impulsa modelos como ChatGPT.',
      'Su trabajo en redes generativas sentó bases para los modernos modelos de difusión y los grandes modelos de lenguaje (LLMs).',
      'Es un defensor activo de la regulación de la IA y de la investigación en seguridad de IA (AI Safety).',
    ],
  },
  {
    name: 'Andrew Ng',
    title: 'El Gran Educador de la IA',
    years: 'Nacido en 1976, Londres, Reino Unido',
    image: '/images/andrew-ng.jpg',
    award: 'Co-fundador de Coursera',
    tags: ['Machine Learning', 'AI Education', 'DeepLearning.AI'],
    bio: 'Andrew Ng es uno de los divulgadores y educadores de IA más influyentes del mundo. Cofundador de Google Brain y Coursera, y fundador de DeepLearning.AI, ha sido fundamental en democratizar el acceso a la educación en inteligencia artificial.',
    contributions: [
      'Fundó Google Brain en 2011, el laboratorio de investigación en deep learning de Google que impulsó productos como Google Search, Translate y Photos.',
      'Fue Director de IA en Baidu, donde desarrolló sistemas de reconocimiento de voz y conducción autónoma.',
      'Lanzó en Coursera cursos de Machine Learning con más de 5 millones de estudiantes, convirtiéndose en el material educativo más popular de la IA.',
      'Fundó DeepLearning.AI y AI Fund para democratizar la IA y preparar a la fuerza laboral global para la revolución de la IA.',
    ],
  },
  {
    name: 'Fei-Fei Li',
    title: 'Pionera de la Visión por Computadora',
    years: 'Nacida en 1976, Pekín, China',
    image: '/images/fei-fei-li.jpg',
    award: 'Directora del Stanford HAI',
    tags: ['Computer Vision', 'ImageNet', 'AI for Good'],
    bio: 'Fei-Fei Li es la creadora de ImageNet, el conjunto de datos que catalizó la revolución del deep learning. Profesora en Stanford y codirectora del Instituto de Inteligencia Artificial Centrada en el Ser Humano (HAI), es una voz líder en IA ética e inclusiva.',
    contributions: [
      'Creó ImageNet (2009): una base de datos de 14 millones de imágenes etiquetadas que permitió el entrenamiento de redes profundas y desencadenó la revolución del deep learning.',
      'Organizó el ImageNet Large Scale Visual Recognition Challenge (ILSVRC), la competencia que dio a conocer AlexNet y transformó la IA.',
      'Fue Chief Scientist de AI/ML en Google Cloud (2017-2018), democratizando el acceso a herramientas de IA empresarial.',
      'Defiende activamente la diversidad en IA, el uso responsable de la tecnología y las aplicaciones de la IA para el bien social (educación, salud, clima).',
    ],
  },
]

export default function AutoresDashboardPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Módulo 04</span>
          <span className="h-px flex-1 bg-border/50" />
        </div>
        <h1 className="text-3xl font-bold text-foreground text-balance">
          Autores y <span className="text-secondary">Pioneros</span> de la IA
        </h1>
        <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
          Conoce en profundidad las contribuciones de los científicos que han dado forma al campo
          de la inteligencia artificial y cuyo trabajo ha transformado nuestra realidad.
        </p>
      </div>

      {/* Author cards */}
      <div className="space-y-8">
        {authors.map((author, i) => (
          <article
            key={author.name}
            className="rounded-xl border border-border/50 bg-card overflow-hidden card-hover border-glow"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="relative h-56 sm:h-auto sm:w-48 shrink-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden sm:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent sm:hidden" />
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                {/* Name & award */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">{author.years}</p>
                    <h2 className="text-xl font-bold text-foreground">{author.name}</h2>
                    <p className={`font-mono text-xs mt-0.5 ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                      {author.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1">
                    <Award className="h-3 w-3 text-yellow-500" />
                    <span className="font-mono text-xs text-yellow-500">{author.award}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {author.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${
                        i % 2 === 0
                          ? 'border-primary/30 bg-primary/10 text-primary'
                          : 'border-secondary/30 bg-secondary/10 text-secondary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{author.bio}</p>

                {/* Contributions */}
                <div>
                  <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    Contribuciones Clave
                  </h3>
                  <ul className="space-y-2">
                    {author.contributions.map((c, ci) => (
                      <li key={ci} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
