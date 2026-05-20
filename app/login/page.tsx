'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Cpu, ArrowLeft, AlertCircle } from 'lucide-react'

type Mode = 'login' | 'register'

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>('login')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!email) newErrors.email = 'El correo es requerido.'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Ingresa un correo válido.'
    if (!password) newErrors.password = 'La contraseña es requerida.'
    else if (password.length < 6) newErrors.password = 'Mínimo 6 caracteres.'
    if (mode === 'register') {
      if (!name) newErrors.name = 'El nombre es requerido.'
      if (password !== confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    // Simulated auth — redirect to dashboard
    await new Promise((r) => setTimeout(r, 1000))
    setIsLoading(false)
    router.push('/dashboard')
  }

  const switchMode = (newMode: Mode) => {
    setMode(newMode)
    setErrors({})
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center grid-bg px-4 py-16">
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Back link */}
        <Link
          href="/"
          className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver al inicio
        </Link>

        {/* Card */}
        <div className="rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden">
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

          <div className="p-8">
            {/* Logo */}
            <div className="mb-8 flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/50 bg-primary/10 glow-green">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  Plataforma Educativa
                </p>
                <h1 className="font-mono text-xl font-bold text-primary">
                  IA<span className="text-foreground">.edu</span>
                </h1>
              </div>
            </div>

            {/* Mode Tabs */}
            <div className="mb-8 flex rounded-lg border border-border overflow-hidden">
              {(['login', 'register'] as Mode[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => switchMode(m)}
                  className={`flex-1 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                    mode === m
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {m === 'login' ? 'Iniciar sesión' : 'Registrarse'}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {mode === 'register' && (
                <div>
                  <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full rounded-md border border-input bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-destructive">
                      <AlertCircle className="h-3 w-3" />{errors.name}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="usuario@email.com"
                  className="w-full rounded-md border border-input bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-destructive">
                    <AlertCircle className="h-3 w-3" />{errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-md border border-input bg-input px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-destructive">
                    <AlertCircle className="h-3 w-3" />{errors.password}
                  </p>
                )}
              </div>

              {mode === 'register' && (
                <div>
                  <label className="mb-1.5 block font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-md border border-input bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1.5 flex items-center gap-1 font-mono text-xs text-destructive">
                      <AlertCircle className="h-3 w-3" />{errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {mode === 'login' && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`h-4 w-4 rounded border transition-colors ${rememberMe ? 'border-primary bg-primary' : 'border-border bg-input group-hover:border-primary/50'}`}>
                        {rememberMe && (
                          <svg className="h-full w-full p-0.5 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      Recordarme
                    </span>
                  </label>
                  <button type="button" className="font-mono text-xs text-primary hover:text-primary/80 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md border border-primary bg-primary py-3 font-mono text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed glow-green"
              >
                {isLoading
                  ? 'Procesando...'
                  : mode === 'login'
                  ? 'Iniciar sesión'
                  : 'Crear cuenta'}
              </button>
            </form>

            {/* Switch hint */}
            <p className="mt-6 text-center font-mono text-xs text-muted-foreground">
              {mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
              <button
                type="button"
                onClick={() => switchMode(mode === 'login' ? 'register' : 'login')}
                className="text-primary hover:underline"
              >
                {mode === 'login' ? 'Regístrate' : 'Inicia sesión'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
