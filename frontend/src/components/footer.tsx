import Link from "next/link";

const footerNavLinks = [
  { name: "Privacy Policy", href: "/" },
  { name: "Terms", href: "/" },
  { name: "Support", href: "/" },
];

export default function Footer() {
  return (
    <footer className="border-t p-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row items-center md:justify-between text-center md:text-start">
        <div>
          <Link href="/" className="font-bold text-xl ">
            Lumina
          </Link>
          <p className="text-muted-foreground text-sm">
            © 2024 Lumina. Precision-driven digital tools.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex gap-3 text-sm text-muted-foreground sm:gap-6">
            {footerNavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className="hover:text-foreground transition-colors"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
