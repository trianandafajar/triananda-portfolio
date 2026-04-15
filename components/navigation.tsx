import { NavContent } from "@/components/nav-content"
import { StickyNavigation } from "@/components/sticky-navigation"

export function Navigation() {
  return (
    <>
      <nav className="absolute left-0 top-0 z-40 w-full">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4">
          <NavContent />
        </div>
      </nav>

      <StickyNavigation />
    </>
  )
}
