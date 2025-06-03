"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, content } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: content.nav.home },
    { href: "/about", label: content.nav.about },
    { href: "/projects", label: content.nav.projects },
    { href: "/achievements", label: content.nav.achievements },
    { href: "/events", label: content.nav.events },
    { href: "/team", label: content.nav.team },
    { href: "/timeline", label: content.nav.timeline },
    { href: "/gallery", label: content.nav.gallery },
    { href: "/stories", label: content.nav.stories },
    { href: "/blog", label: content.nav.blog },
    { href: "/faq", label: content.nav.faq },
    { href: "/join", label: content.nav.join },
    { href: "/partners", label: content.nav.partners },
    { href: "/resources", label: content.nav.resources },
    { href: "/contact", label: content.nav.contact },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-lg text-foreground">
                  {language === "fa" ? "انجمن مهندسی کامپیوتر" : "CS Association"}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === "fa" ? "دانشگاه تبریز" : "University of Tabriz"}
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 8).map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                  style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "fa" : "en")}
                className="w-10 h-10 p-0"
              >
                <Globe className="w-4 h-4" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-10 h-10 p-0">
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.div className="lg:hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 p-0">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
                      onClick={() => setIsOpen(false)}
                      style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
