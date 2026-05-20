import Image from 'next/image'
import { Zap, Activity, Database, Cpu } from 'lucide-react'

const learningSteps = [
  {
    step: '01',
    title: 'Entrada de Datos',
    desc: 'La red recibe datos de entrada (imágenes, texto, números). Cada dato se transforma en valores numéricos que fluyen hacia la capa de entrada.',
  },
  {
    step: '02',
    title: 'Propagación Hacia Adelante',
    desc: 'Los datos atraviesan capas ocultas. En cada neurona, se calculan sumas ponderadas y se aplican funciones de activación que determinan si la neurona "se dispara".',
  },
  {
    step: '03',
    title: 'Cálculo del Error',
    desc: 'La salida de la red se compara con el resultado esperado. La diferencia (pérdida o loss) mide qué tan equivocada está la red en su predicción.',
  },
  {
    step: '04',
    title: 'Retropropagación',
    desc: 'El error se propaga hacia atrás por la red. Usando cálculo diferencial (gradiente descendente), se determina cuánto debe cambiar cada peso para reducir el error.',
  },
  {
    step: '05',
    title: 'Actualización de Pesos',
    desc: 'Los pesos sinápticos se ajustan levemente según el gradiente calculado. Este proceso se repite miles o millones de veces hasta que la red aprende el patrón.',
  },
]

const brainComparison = [
  {
    biological: 'Neurona biológica',
    artificial: 'Neurona artificial (perceptrón)',
    icon: Activity,
  },
  {
    biological: 'Sinapsis (conexión entre neuronas)',
    artificial: 'Peso (weight) de la conexión',
    icon: Zap,
  },
  {
    biological: 'Potencial de acción (disparo)',
    artificial: 'Función de activación (ReLU, Sigmoid)',
    icon: Cpu,
  },
  {
    biological: 'Aprendizaje por experiencia',
    artificial: 'Entrenamiento con datos y gradiente',
    icon: Database,
  },
]

export default function RedesNeuronalesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Módulo 02</span>
          <span className="h-px flex-1 bg-border/50" />
        </div>
        <h1 className="text-3xl font-bold text-foreground text-balance">
          Redes <span className="text-primary">Neuronales</span> Artificiales
        </h1>
        <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
          Las redes neuronales artificiales son sistemas computacionales inspirados en la estructura
          y funcionamiento del cerebro humano, capaces de aprender patrones complejos a partir de datos.
        </p>
      </div>

      {/* Main intro */}
      <div className="rounded-xl border border-border/50 bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">¿Qué son las Redes Neuronales?</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Una <strong className="text-foreground">red neuronal artificial</strong> es un modelo computacional
            compuesto por capas de unidades matemáticas simples llamadas neuronas artificiales o nodos.
            Estas unidades están interconectadas mediante parámetros ajustables llamados <em className="text-primary">pesos sinápticos</em>,
            que determinan la fuerza de la señal que pasa entre neuronas.
          </p>
          <p>
            La arquitectura típica consta de tres tipos de capas: la <strong className="text-foreground">capa de entrada</strong>,
            que recibe los datos; las <strong className="text-foreground">capas ocultas</strong>,
            que extraen características y representaciones progresivamente más abstractas;
            y la <strong className="text-foreground">capa de salida</strong>, que produce el resultado final
            (una clasificación, un valor numérico, o una distribución de probabilidad).
          </p>
          <p>
            La magia de las redes neuronales reside en su capacidad de aprender automáticamente
            representaciones útiles de los datos, eliminando la necesidad de que los ingenieros
            diseñen manualmente las características relevantes. Esta propiedad las hace
            extraordinariamente versátiles.
          </p>
        </div>
      </div>

      {/* Neural network visualization */}
      <div className="rounded-xl border border-border/50 overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <Image
            src="/images/neural-network.jpg"
            alt="Visualización de una red neuronal artificial"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <p className="font-mono text-xs text-primary uppercase tracking-widest">Visualización</p>
            <p className="mt-1 text-sm text-foreground/80">
              Flujo de información en una red neuronal multicapa: entrada → capas ocultas → salida
            </p>
          </div>
        </div>
      </div>

      {/* Brain comparison */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-5">
          Inspiración Biológica: Cerebro vs. Red Neuronal
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          El cerebro humano contiene aproximadamente 86 mil millones de neuronas conectadas por
          más de 100 billones de sinapsis. Las redes neuronales artificiales simulan este
          principio a escala mucho menor, pero con resultados sorprendentes:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {brainComparison.map(({ biological, artificial, icon: Icon }) => (
            <div
              key={biological}
              className="flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4 border-glow"
            >
              <Icon className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <div className="space-y-2">
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Biológico</p>
                  <p className="text-sm text-foreground">{biological}</p>
                </div>
                <div className="h-px bg-border/50" />
                <div>
                  <p className="font-mono text-xs text-primary uppercase tracking-wider">Artificial</p>
                  <p className="text-sm text-foreground">{artificial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How they learn */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-5">
          ¿Cómo Aprenden las Redes Neuronales?
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          El aprendizaje en redes neuronales ocurre a través de un proceso iterativo llamado
          entrenamiento supervisado, donde la red ajusta sus pesos internos para minimizar
          el error en sus predicciones:
        </p>
        <div className="space-y-4">
          {learningSteps.map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 rounded-xl border border-border/50 bg-card p-5 card-hover">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
                <span className="font-mono text-xs font-bold text-primary">{step}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key formula block */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
        <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Concepto Clave: Gradiente Descendente</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          El algoritmo de retropropagación (backpropagation), popularizado por Geoffrey Hinton en 1986,
          calcula el gradiente de la función de pérdida con respecto a cada peso de la red. Usando
          este gradiente, los pesos se actualizan en la dirección opuesta al gradiente (descenso de
          gradiente) para minimizar el error. Este proceso, repetido durante miles de iteraciones
          sobre millones de ejemplos de entrenamiento, permite a la red aprender representaciones
          increíblemente complejas del mundo.
        </p>
        <div className="mt-4 rounded-md border border-primary/20 bg-background/50 px-4 py-3 font-mono text-sm text-primary/80">
          w_nuevo = w_actual − α × ∂L/∂w
          <span className="ml-4 text-muted-foreground text-xs">// α = tasa de aprendizaje, L = función de pérdida</span>
        </div>
      </div>
    </div>
  )
}
