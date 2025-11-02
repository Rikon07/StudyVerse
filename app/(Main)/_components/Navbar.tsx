// (Main)/_components/Navbar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Logo from "@/public/Bashlogo.png";
import { cn } from "@/lib/utils";
import { ThemeToggleButton, useThemeTransition } from "@/components/ui/shadcn-io/theme-toggle-button";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Dashboard", href: "/dashboard" },
  ];
  const { theme, setTheme } = useTheme();
  const { startTransition } = useThemeTransition();

  const handleToggle = () => {
    startTransition(() => {
      setTheme(theme === "light" ? "dark" : "light");
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="text-lg font-semibold">StudyVerse.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <ThemeToggleButton
            theme={theme === "light" ? "light" : "dark"}
            variant="polygon" 
            start="center"
            onClick={handleToggle}
            showLabel={false}
            className="rounded-xl cursor-pointer"
            />
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "sm", variant: "outline" }))}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-sm">
          <div className="container py-3 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-3 pt-3">
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "sm", variant: "outline" }), "w-full")}
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className={cn(buttonVariants({ size: "sm" }), "w-full")}
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
