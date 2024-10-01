import { Car, Home } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-4 sm:gap-6 px-6">
        <h2 className="font-bold text-red-500">LIONS</h2>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/stock">
            <Car className="h-4 w-4" />
            Veículos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>

      </div>
    </div>
  );
}
