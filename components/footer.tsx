"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export function Footer() {
  const { language, content } = useLanguage()

  const quickLinks = [
    { href: "/about", label: content.nav.about },
    { href: "/projects", label: content.nav.projects },
    { href: "/events", label: content.nav.events },
    { href: "/join", label: content.nav.join },
    { href: "/contact", label: content.nav.contact },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@cs-tabriz.ir", label: "Email" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">
                  {language === "fa" ? "انجمن مهندسی کامپیوتر" : "CS Association"}
                </div>
                <div className="text-xs text-muted-foreground">
                  {language === "fa" ? "دانشگاه تبریز" : "University of Tabriz"}
                </div>
              </div>
            </div>
            <p
              className="text-muted-foreground text-sm leading-relaxed"
              style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
            >
              {content.footer.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3
              className="font-semibold text-foreground"
              style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
            >
              {content.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="font-semibold text-foreground"
              style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
            >
              {content.footer.contact}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span
                  className="leading-relaxed"
                  style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
                >
                  {content.footer.address}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@cs-tabriz.ir</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+98 41 3393 9000</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3
              className="font-semibold text-foreground"
              style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
            >
              {content.footer.social}
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p
            className="text-muted-foreground text-sm"
            style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
          >
            © {new Date().getFullYear()}{" "}
            {language === "fa"
              ? "انجمن مهندسی کامپیوتر دانشگاه تبریز"
              : "Computer Engineering Association, University of Tabriz"}
            . {content.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
