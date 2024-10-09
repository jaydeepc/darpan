import Logo from './logo'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Session } from '@supabase/supabase-js'
import {
  ArrowRight,
  LogOut,
  MoonIcon,
  SunIcon,
  Trash,
  Undo,
  Info,
  Palette,
  AppWindow,
  UserCircle
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
        {session ? (
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <UserCircle className="h-5 w-5 md:h-6 md:w-6" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>My Account</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="flex flex-col">
                <span className="text-sm font-medium">My Account</span>
                <span className="text-xs text-muted-foreground">
                  jaydeep.chakrabarty@piramal.com
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {/* Add functionality */}}>
                <Info className="mr-2 h-4 w-4 text-muted-foreground" />
                Know about Darpan
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {/* Add functionality */}}>
                <Palette className="mr-2 h-4 w-4 text-muted-foreground" />
                My creations
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {/* Add functionality */}}>
                <AppWindow className="mr-2 h-4 w-4 text-muted-foreground" />
                My Apps
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4 text-muted-foreground" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button variant="default" onClick={showLogin}>
            Sign in
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </nav>
  )
}
