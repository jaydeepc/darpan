import Logo from './logo'
import { Button } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { Session } from '@supabase/supabase-js'
import {
  ArrowRight,
  MoonIcon,
  SunIcon,
  Trash,
  Undo,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export function NavBar({
  session,
  showLogin,
  signOut,
  onClear,
  canClear,
  onUndo,
  canUndo,
}: {
  session: Session | null
  showLogin: () => void
  signOut: () => void
  onClear: () => void
  canClear: boolean
  onUndo: () => void
  canUndo: boolean
}) {
  const { setTheme, theme } = useTheme()
  return (
    <nav className="w-full flex bg-background/80 backdrop-blur-sm border-b border-border py-4 px-6">
      <div className="flex flex-1 items-center">
        <Link href="/" className="flex items-center gap-3" target="_blank">
          <Logo className="w-8 h-8" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Darpan</h1>
        </Link>
        <Link
          href="https://piramalfinance.com"
          className="ml-4 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          target="_blank"
        >
          by Piramal Finance
        </Link>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={onUndo}
                disabled={!canUndo}
              >
                <Undo className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Undo</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClear}
                disabled={!canClear}
              >
                <Trash className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Clear chat</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'light' ? (
                  <SunIcon className="h-4 w-4 md:h-5 md:w-5" />
                ) : (
                  <MoonIcon className="h-4 w-4 md:h-5 md:w-5" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle theme</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {!session && (
          <Button variant="default" onClick={showLogin}>
            Sign in
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </nav>
  )
}
