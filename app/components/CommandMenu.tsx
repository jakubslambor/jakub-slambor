import { routes } from '@/data/routes'
import { Command } from 'cmdk'
import { usePathname, useRouter } from 'next/navigation'

export default function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const { push } = useRouter()
  const pathname = usePathname()

  const navigate = (to: string) => {
    setOpen(false)
    push(to)
  }

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-10 bg-dark/80 backdrop-blur-sm transition-opacity duration-500 ${
        open ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        className="absolute z-20 min-w-[32rem] animate-pop-out rounded-lg border border-steel/70 bg-gray/50 font-semibold text-white shadow backdrop-blur-xl ease-in-out"
      >
        <Command.Input
          className="w-full border-b border-steel/70 bg-transparent p-4 focus:outline-none"
          placeholder="Type a command or search…"
        />

        <Command.List className="p-4">
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Pages">
            {routes
              .filter((route) => route.path !== pathname)
              .map((route) => (
                <Command.Item
                  onSelect={() => navigate(route.path)}
                  key={route.name}
                >
                  {route.name}
                </Command.Item>
              ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </div>
  )
}
