import { User } from 'lucide-react'

export default function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border/50 bg-background/90 backdrop-blur-md px-6 md:px-8">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          Panel de Aprendizaje
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 rounded-md border border-border/50 bg-card px-3 py-1.5">
          <span className="font-mono text-xs text-muted-foreground">Bienvenido,</span>
          <span className="font-mono text-xs text-primary">usuario@email.com</span>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
          <User className="h-4 w-4 text-primary" />
        </div>
      </div>
    </header>
  )
}
