import { ArrowRight } from 'lucide-react'

const networkTypes = [
  {
    id: '01',
    name: 'Redes Feedforward (FNN)',
    subtitle: 'Redes de Propagación hacia Adelante',
    color: 'border-primary/30 bg-primary/5',
    tagColor: 'text-primary border-primary/40 bg-primary/10',
    description:
      'Las redes feedforward son la arquitectura más simple y fundamental. En estas redes, la información fluye en una única dirección: desde la capa de entrada, a través de las capas ocultas, hasta la capa de salida. No existen ciclos ni conexiones hacia atrás.',
    details: [
      'También conocidas como Perceptrones Multicapa (MLP)',
      'Cada neurona está completamente conectada con todas las neuronas de la capa siguiente',
      'Usan funciones de activación como ReLU, Sigmoid o Tanh',
      'Entrenadas con retropropagación y gradiente descendente',
      'Son la base sobre la que se construyen arquitecturas más complejas',
    ],
    useCase: {
      title: 'Caso de Uso',
      example: 'Clasificación de correos como spam o no spam, predicción de precios de vivienda, detección de fraude bancario y diagnóstico médico basado en datos tabulares.',
    },
  },
  {
    id: '02',
    name: 'Redes Convolucionales (CNN)',
    subtitle: 'Convolutional Neural Networks',
    color: 'border-secondary/30 bg-secondary/5',
    tagColor: 'text-secondary border-secondary/40 bg-secondary/10',
    description:
      'Las CNN están especialmente diseñadas para procesar datos con estructura de cuadrícula, como imágenes. Utilizan operaciones de convolución para detectar características locales (bordes, texturas, formas) independientemente de su posición en la imagen.',
    details: [
      'Capas convolucionales: detectan características mediante filtros aprendidos',
      'Capas de pooling: reducen dimensionalidad preservando características clave',
      'Invariancia a la traslación: detecta un gato sin importar dónde esté en la imagen',
      'Arquitecturas famosas: LeNet, AlexNet, VGG, ResNet, EfficientNet',
      'Yann LeCun fue pionero en su desarrollo para reconocimiento de dígitos escritos',
    ],
    useCase: {
      title: 'Caso de Uso',
      example: 'Reconocimiento facial, diagnóstico por imagen médica (detección de tumores en radiografías), conducción autónoma, búsqueda de imágenes y reconocimiento de objetos en tiempo real.',
    },
  },
  {
    id: '03',
    name: 'Redes Recurrentes (RNN)',
    subtitle: 'Recurrent Neural Networks',
    color: 'border-primary/30 bg-primary/5',
    tagColor: 'text-primary border-primary/40 bg-primary/10',
    description:
      'Las RNN están diseñadas para procesar secuencias de datos donde el orden importa. A diferencia de las FNN, tienen conexiones que forman ciclos, permitiendo que la información persista entre pasos de tiempo (memoria temporal).',
    details: [
      'Procesan secuencias de longitud variable: texto, audio, series de tiempo',
      'Mantienen un estado oculto que actúa como "memoria" de la secuencia',
      'LSTM (Long Short-Term Memory): soluciona el problema del gradiente que desaparece',
      'GRU (Gated Recurrent Unit): versión simplificada y eficiente de las LSTM',
      'Bidireccionales: procesan la secuencia en ambas direcciones para más contexto',
    ],
    useCase: {
      title: 'Caso de Uso',
      example: 'Traducción automática de idiomas, generación de texto, reconocimiento de voz, predicción del mercado financiero, análisis de sentimientos en reseñas y subtitulado automático de vídeos.',
    },
  },
  {
    id: '04',
    name: 'Redes Generativas Adversariales (GAN)',
    subtitle: 'Generative Adversarial Networks',
    color: 'border-secondary/30 bg-secondary/5',
    tagColor: 'text-secondary border-secondary/40 bg-secondary/10',
    description:
      'Las GAN consisten en dos redes neuronales que compiten entre sí: un Generador que crea datos sintéticos y un Discriminador que intenta distinguir los datos reales de los falsos. Esta competición impulsa a ambas redes a mejorar continuamente.',
    details: [
      'Propuestas por Ian Goodfellow en 2014, revolucionaron la IA generativa',
      'El Generador aprende a crear muestras cada vez más realistas',
      'El Discriminador aprende a detectar falsificaciones cada vez mejor',
      'Equilibrio de Nash: cuando el Generador engaña al Discriminador el 50% del tiempo',
      'Variantes: DCGAN, StyleGAN, CycleGAN, Pix2Pix, ProGAN',
    ],
    useCase: {
      title: 'Caso de Uso',
      example: 'Generación de imágenes fotorrealistas de personas que no existen, conversión de bocetos a fotos, aumento de datos de entrenamiento, generación de arte, síntesis de voz y deepfakes.',
    },
  },
]

export default function TiposDeRedesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Módulo 03</span>
          <span className="h-px flex-1 bg-border/50" />
        </div>
        <h1 className="text-3xl font-bold text-foreground text-balance">
          Tipos de <span className="text-primary">Redes Neuronales</span>
        </h1>
        <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
          A lo largo de décadas de investigación, los científicos han desarrollado arquitecturas
          especializadas para diferentes tipos de problemas. Cada una tiene sus fortalezas,
          limitaciones y casos de uso ideales.
        </p>
      </div>

      {/* Overview bar */}
      <div className="flex flex-wrap gap-3">
        {networkTypes.map((type) => (
          <div key={type.id} className={`rounded-full border px-4 py-1.5 font-mono text-xs ${type.tagColor}`}>
            {type.id} — {type.name.split(' ').slice(-2).join(' ')}
          </div>
        ))}
      </div>

      {/* Network type cards */}
      <div className="space-y-8">
        {networkTypes.map((type) => (
          <article
            key={type.id}
            className={`rounded-xl border p-6 ${type.color} card-hover`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-xs ${type.tagColor.split(' ')[0]}`}>{type.id}</span>
                  <span className="h-px w-6 bg-current opacity-30" />
                  <span className="font-mono text-xs text-muted-foreground">{type.subtitle}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground">{type.name}</h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-5">{type.description}</p>

            {/* Details */}
            <div className="mb-5">
              <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Características Principales
              </h3>
              <ul className="space-y-2">
                {type.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3.5 w-3.5 mt-0.5 shrink-0 text-current opacity-60" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Use case */}
            <div className="rounded-lg border border-current/20 bg-background/40 p-4">
              <p className={`font-mono text-xs uppercase tracking-widest mb-2 ${type.tagColor.split(' ')[0]}`}>
                {type.useCase.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{type.useCase.example}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Comparison table */}
      <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
        <div className="px-6 py-4 border-b border-border/50">
          <h2 className="font-semibold text-foreground">Tabla Comparativa</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="px-6 py-3 text-left font-mono text-xs text-muted-foreground uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left font-mono text-xs text-muted-foreground uppercase tracking-wider">Fortaleza</th>
                <th className="px-6 py-3 text-left font-mono text-xs text-muted-foreground uppercase tracking-wider">Limitación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-3 font-mono text-xs text-primary">FNN</td>
                <td className="px-6 py-3 text-muted-foreground">Datos tabulares, versatilidad</td>
                <td className="px-6 py-3 text-muted-foreground">No capta relaciones espaciales ni temporales</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-3 font-mono text-xs text-secondary">CNN</td>
                <td className="px-6 py-3 text-muted-foreground">Imágenes, visión computacional</td>
                <td className="px-6 py-3 text-muted-foreground">Costosas computacionalmente, requieren muchos datos</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-3 font-mono text-xs text-primary">RNN/LSTM</td>
                <td className="px-6 py-3 text-muted-foreground">Secuencias, texto, audio</td>
                <td className="px-6 py-3 text-muted-foreground">Difícil paralelización, gradiente que desaparece</td>
              </tr>
              <tr className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-3 font-mono text-xs text-secondary">GAN</td>
                <td className="px-6 py-3 text-muted-foreground">Generación de contenido realista</td>
                <td className="px-6 py-3 text-muted-foreground">Inestable en entrenamiento, colapso de modo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
