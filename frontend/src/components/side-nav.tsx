"use client";

import { cn } from "@/lib/utils";
import { User, Shield, Bell, CreditCard, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideNavLinks = [
  { name: "Account", href: "/account", icon: User },
  { name: "Security", href: "/security", icon: Shield },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Billing", href: "/billing", icon: CreditCard },
];

export default function SideNavigation() {
  const pathname = usePathname();
  return (
    <aside className="lg:w-1/5">
      <h2 className="font-semibold text-2xl px-8 pb-4 hidden md:block">
        Settings
      </h2>

      <nav className="px-4 md:py-4">
        <ul className="text-sm text-muted-foreground pb-4 border-b-2 space-y-2">
          {sideNavLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <Link
                  className={cn(
                    "flex items-center gap-4 px-4 py-2 rounded-sm transition-colors",
                    isActive &&
                      "border-l-4 px-3 border-primary bg-muted font-semibold text-foreground",
                  )}
                  href={link.href}
                >
                  <Icon strokeWidth={3} className="size-4" />
                  <span className="sr-only md:not-sr-only font-medium">
                    {link.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link
        href="/"
        className="flex items-center gap-4 px-8 py-2 text-sm font-medium text-red-700"
      >
        <LogOut strokeWidth={3} className="size-4" />
        <span className="sr-only md:not-sr-only">Log Out</span>
      </Link>
    </aside>
  );
}
