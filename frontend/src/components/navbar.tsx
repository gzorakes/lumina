import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Features", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "About", href: "/" },
];

export default function Navbar() {
  return (
    <header className="border-b p-4">
      <div className="max-w-7xl mx-auto flex items-center gap-12">
        <Link href={"/"} className="font-bold text-2xl">
          Lumina
        </Link>
        <div className="flex items-center justify-between flex-1">
          <nav aria-label="Main navigation">
            <ul className="flex gap-6 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button variant="ghost">Sign In</Button>
        </div>
      </div>
    </header>
  );
}
