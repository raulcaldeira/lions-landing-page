import { Home, List } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <h2 className="font-bold text-red-500">LIONS</h2>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/services">
            <List className="h-4 w-4" />
            Serviços
          </NavLink>
        </nav>

      </div>
    </div>
  );
}
