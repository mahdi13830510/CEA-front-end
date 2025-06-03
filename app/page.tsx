"use client"

import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  Code,
  Users,
  Trophy,
  Calendar,
  Sparkles,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Rocket,
  Zap,
  Star,
  Heart,
  Award,
  Target,
  ChevronDown,
  Play,
  Pause,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Language = "en" | "fa"
type Theme = "light" | "dark"

const content = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      projects: "Projects",
      achievements: "Achievements",
      events: "Events",
      team: "Team",
      timeline: "Timeline",
      gallery: "Gallery",
      stories: "Stories",
      blog: "Blog",
      faq: "FAQ",
      join: "Join Us",
      partners: "Partners",
      resources: "Resources",
      contact: "Contact",
    },
    hero: {
      badge: "🚀 Innovation & Excellence",
      title: "Computer Engineering Association",
      subtitle: "University of Tabriz",
      description:
        "Rooted in Knowledge, Growing in Innovation - Empowering the next generation of computer engineers through cutting-edge projects, competitions, and collaborative learning.",
      joinButton: "Join Our Community",
      learnMore: "Explore More",
      scrollText: "Scroll to discover",
    },
    features: {
      title: "Why Choose Us?",
      subtitle: "Discover what makes our association extraordinary",
      items: [
        { icon: Rocket, title: "Innovation Hub", desc: "Cutting-edge projects and research opportunities" },
        { icon: Trophy, title: "Competition Excellence", desc: "Top rankings in national and international contests" },
        { icon: Users, title: "Strong Community", desc: "500+ active members supporting each other" },
        { icon: Lightbulb, title: "Creative Solutions", desc: "Real-world problem solving through technology" },
        { icon: Target, title: "Career Growth", desc: "Professional development and industry connections" },
        { icon: Heart, title: "Passion Driven", desc: "Fueled by love for technology and learning" },
      ],
    },
    stats: {
      members: "Active Members",
      awards: "Awards Won",
      projects: "Projects Completed",
      events: "Events Organized",
      satisfaction: "Satisfaction Rate",
      partnerships: "Industry Partners",
    },
    announcement: {
      title: "🔥 Latest Announcements",
      featured: {
        title: "TabCode 2024 Registration Now Open!",
        description:
          "Join the most prestigious programming competition in our faculty. Register now for TabCode 2024 and compete with the best minds in computer science.",
        cta: "Register Now",
        badge: "Hot 🔥",
      },
    },
    testimonials: {
      title: "What Our Members Say",
      subtitle: "Real stories from our amazing community",
      items: [
        {
          name: "Ali Rezaei",
          role: "Software Engineer at Google",
          text: "This association changed my life. The projects and competitions prepared me for my dream job!",
          avatar: "AR",
        },
        {
          name: "Sara Mohammadi",
          role: "AI Researcher",
          text: "The collaborative environment and mentorship here is unmatched. Highly recommend!",
          avatar: "SM",
        },
        {
          name: "Reza Ahmadi",
          role: "Startup Founder",
          text: "I learned leadership and technical skills that helped me build my own company.",
          avatar: "RA",
        },
      ],
    },
    footer: {
      description: "Empowering computer engineering students through innovation, collaboration, and excellence.",
      quickLinks: "Quick Links",
      contact: "Contact Info",
      social: "Follow Us",
      rights: "All rights reserved.",
      address: "Faculty of Computer Engineering, University of Tabriz, Tabriz, Iran",
      newsletter: "Subscribe to our newsletter for updates!",
    },
  },
  fa: {
    nav: {
      home: "خانه",
      about: "درباره ما",
      projects: "پروژه‌ها",
      achievements: "دستاوردها",
      events: "رویدادها",
      team: "تیم",
      timeline: "جدول زمانی",
      gallery: "گالری",
      stories: "داستان‌ها",
      blog: "وبلاگ",
      faq: "سوالات متداول",
      join: "عضویت",
      partners: "شرکای ما",
      resources: "منابع",
      contact: "تماس",
    },
    hero: {
      badge: "🚀 نوآوری و تعالی",
      title: "انجمن مهندسی کامپیوتر",
      subtitle: "دانشگاه تبریز",
      description:
        "ریشه در دانش، رشد در نوآوری - توانمندسازی نسل آینده مهندسان کامپیوتر از طریق پروژه‌های پیشرفته، مسابقات و یادگیری مشارکتی.",
      joinButton: "به جامعه ما بپیوندید",
      learnMore: "بیشتر کاوش کنید",
      scrollText: "برای کشف ادامه دهید",
    },
    features: {
      title: "چرا ما را انتخاب کنید؟",
      subtitle: "کشف کنید چه چیزی انجمن ما را فوق‌العاده می‌کند",
      items: [
        { icon: Rocket, title: "مرکز نوآوری", desc: "پروژه‌های پیشرفته و فرصت‌های تحقیقاتی" },
        { icon: Trophy, title: "تعالی در مسابقات", desc: "رتبه‌های برتر در مسابقات ملی و بین‌المللی" },
        { icon: Users, title: "جامعه قوی", desc: "بیش از ۵۰۰ عضو فعال که از یکدیگر حمایت می‌کنند" },
        { icon: Lightbulb, title: "راه‌حل‌های خلاقانه", desc: "حل مسائل دنیای واقعی از طریق فناوری" },
        { icon: Target, title: "رشد شغلی", desc: "توسعه حرفه‌ای و ارتباطات صنعتی" },
        { icon: Heart, title: "انگیزه محور", desc: "با عشق به فناوری و یادگیری" },
      ],
    },
    stats: {
      members: "اعضای فعال",
      awards: "جوایز کسب شده",
      projects: "پروژه‌های تکمیل شده",
      events: "رویدادهای برگزار شده",
      satisfaction: "نرخ رضایت",
      partnerships: "شرکای صنعتی",
    },
    announcement: {
      title: "🔥 آخرین اعلانات",
      featured: {
        title: "ثبت‌نام تاب‌کد ۲۰۲۴ آغاز شد!",
        description:
          "در معتبرترین مسابقه برنامه‌نویسی دانشکده شرکت کنید. همین حالا برای تاب‌کد ۲۰۲۴ ثبت‌نام کنید و با بهترین ذهن‌های علوم کامپیوتر رقابت کنید.",
        cta: "ثبت‌نام کنید",
        badge: "داغ 🔥",
      },
    },
    testimonials: {
      title: "اعضای ما چه می‌گویند",
      subtitle: "داستان‌های واقعی از جامعه شگفت‌انگیز ما",
      items: [
        {
          name: "علی رضایی",
          role: "مهندس نرم‌افزار در گوگل",
          text: "این انجمن زندگی‌ام را تغییر داد. پروژه‌ها و مسابقات مرا برای شغل رویایی‌ام آماده کرد!",
          avatar: "AR",
        },
        {
          name: "سارا محمدی",
          role: "محقق هوش مصنوعی",
          text: "محیط همکاری و راهنمایی اینجا بی‌نظیر است. به شدت توصیه می‌کنم!",
          avatar: "SM",
        },
        {
          name: "رضا احمدی",
          role: "بنیان‌گذار استارتاپ",
          text: "مهارت‌های رهبری و فنی که اینجا یاد گرفتم به من کمک کرد شرکت خودم را بسازم.",
          avatar: "RA",
        },
      ],
    },
    footer: {
      description: "توانمندسازی دانشجویان مهندسی کامپیوتر از طریق نوآوری، همکاری و تعالی.",
      quickLinks: "لینک‌های سریع",
      contact: "اطلاعات تماس",
      social: "ما را دنبال کنید",
      rights: "تمامی حقوق محفوظ است.",
      address: "دانشکده مهندسی کامپیوتر، دانشگاه تبریز، تبریز، ایران",
      newsletter: "برای دریافت آخرین اخبار عضو خبرنامه شوید!",
    },
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("en")
  const [theme, setTheme] = useState<Theme>("light")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [showCursor, setShowCursor] = useState(false)
  const [cursorVariant, setCursorVariant] = useState("default")
  const heroRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  const currentContent = content[language]

  // Typing animation effect
  useEffect(() => {
    const text = currentContent.hero.description
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [language])

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % currentContent.testimonials.items.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [currentContent.testimonials.items.length])

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Cursor visibility
  useEffect(() => {
    const handleMouseEnter = () => setShowCursor(true)
    const handleMouseLeave = () => setShowCursor(false)

    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Enhanced liquid blob animation with error handling
  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Blob class for better management
    class Blob {
      x: number
      y: number
      radius: number
      baseRadius: number
      color: string
      vx: number
      vy: number
      phase: number

      constructor(x: number, y: number, radius: number, color: string, vx: number, vy: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.baseRadius = radius
        this.color = color
        this.vx = vx
        this.vy = vy
        this.phase = Math.random() * Math.PI * 2
      }

      update(mouseX: number, mouseY: number, canvasWidth: number, canvasHeight: number) {
        // Update position
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x <= this.baseRadius || this.x >= canvasWidth - this.baseRadius) {
          this.vx *= -1
          this.x = Math.max(this.baseRadius, Math.min(canvasWidth - this.baseRadius, this.x))
        }
        if (this.y <= this.baseRadius || this.y >= canvasHeight - this.baseRadius) {
          this.vy *= -1
          this.y = Math.max(this.baseRadius, Math.min(canvasHeight - this.baseRadius, this.y))
        }

        // Calculate distance to mouse
        const distanceToMouse = Math.sqrt(Math.pow(this.x - mouseX, 2) + Math.pow(this.y - mouseY, 2))
        const mouseInfluence = Math.max(0, 1 - distanceToMouse / 200)

        // Update phase for organic movement
        this.phase += 0.02

        // Calculate new radius with safety checks
        const baseVariation = Math.sin(this.phase) * 15
        const mouseVariation = mouseInfluence * 25
        const newRadius = this.baseRadius + baseVariation + mouseVariation

        // Ensure radius is always positive and within reasonable bounds
        this.radius = Math.max(10, Math.min(300, newRadius))
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Additional safety check before drawing
        if (this.radius <= 0) return

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create blobs
    const blobs: Blob[] = [
      new Blob(
        canvas.width * 0.2,
        canvas.height * 0.3,
        120,
        theme === "light" ? "rgba(59, 130, 246, 0.12)" : "rgba(59, 130, 246, 0.08)",
        0.5,
        0.3,
      ),
      new Blob(
        canvas.width * 0.7,
        canvas.height * 0.6,
        140,
        theme === "light" ? "rgba(147, 51, 234, 0.12)" : "rgba(147, 51, 234, 0.08)",
        -0.3,
        0.4,
      ),
      new Blob(
        canvas.width * 0.5,
        canvas.height * 0.2,
        100,
        theme === "light" ? "rgba(236, 72, 153, 0.12)" : "rgba(236, 72, 153, 0.08)",
        0.2,
        -0.3,
      ),
      new Blob(
        canvas.width * 0.3,
        canvas.height * 0.7,
        130,
        theme === "light" ? "rgba(16, 185, 129, 0.12)" : "rgba(16, 185, 129, 0.08)",
        -0.25,
        -0.35,
      ),
    ]

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw blobs
      blobs.forEach((blob) => {
        try {
          blob.update(mousePosition.x, mousePosition.y, canvas.width, canvas.height)
          blob.draw(ctx)
        } catch (error) {
          console.warn("Blob animation error:", error)
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mounted, theme, mousePosition.x, mousePosition.y])

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme)
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")
  const toggleLanguage = () => setLanguage(language === "en" ? "fa" : "en")
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const navItems = [
    { href: "/", label: currentContent.nav.home, icon: "🏠" },
    { href: "/about", label: currentContent.nav.about, icon: "👥" },
    { href: "/projects", label: currentContent.nav.projects, icon: "🚀" },
    { href: "/achievements", label: currentContent.nav.achievements, icon: "🏆" },
    { href: "/events", label: currentContent.nav.events, icon: "📅" },
    { href: "/team", label: currentContent.nav.team, icon: "👨‍💻" },
    { href: "/gallery", label: currentContent.nav.gallery, icon: "🖼️" },
    { href: "/blog", label: currentContent.nav.blog, icon: "📝" },
    { href: "/join", label: currentContent.nav.join, icon: "✨" },
    { href: "/contact", label: currentContent.nav.contact, icon: "📞" },
  ]

  const stats = [
    { icon: Users, value: "500+", label: currentContent.stats.members, color: "from-blue-500 to-cyan-500" },
    { icon: Trophy, value: "50+", label: currentContent.stats.awards, color: "from-yellow-500 to-orange-500" },
    { icon: Code, value: "100+", label: currentContent.stats.projects, color: "from-green-500 to-emerald-500" },
    { icon: Calendar, value: "25+", label: currentContent.stats.events, color: "from-purple-500 to-pink-500" },
    { icon: Star, value: "98%", label: currentContent.stats.satisfaction, color: "from-red-500 to-rose-500" },
    { icon: Award, value: "15+", label: currentContent.stats.partnerships, color: "from-indigo-500 to-blue-500" },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="/ambient-tech.mp3" type="audio/mpeg" />
      </audio>

      {/* Liquid Blob Background */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{ opacity: 0.8 }} />

      {/* Custom Cursor */}
      {showCursor && (
        <div
          className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-300 ${
            cursorVariant === "hover" ? "scale-150" : ""
          }`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
          }}
        />
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-2xl border-b border-border/50 shadow-blue-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 hover:scale-105 transition-all duration-300 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/25 transition-all duration-300">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {language === "fa" ? "انجمن مهندسی کامپیوتر" : "CS Association"}
                </div>
                <div className="text-sm text-muted-foreground">
                  {language === "fa" ? "دانشگاه تبریز" : "University of Tabriz"}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.slice(0, 6).map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-xl hover:bg-muted/50 relative overflow-hidden"
                  style={{
                    fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif",
                    animationDelay: `${index * 100}ms`,
                  }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{item.icon}</span>
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-3">
              {/* Music Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMusic}
                className="w-12 h-12 p-0 hover:scale-110 transition-all duration-300 hover:bg-blue-500/10"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>

              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="w-12 h-12 p-0 hover:scale-110 transition-all duration-300 hover:bg-purple-500/10 relative"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <Globe className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 text-xs px-1 py-0 bg-gradient-to-r from-blue-500 to-purple-500">
                  {language.toUpperCase()}
                </Badge>
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-12 h-12 p-0 hover:scale-110 transition-all duration-300 hover:bg-yellow-500/10"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 rotate-0 scale-100 transition-all" />
                ) : (
                  <Sun className="w-5 h-5 rotate-0 scale-100 transition-all" />
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-12 h-12 p-0 hover:scale-110 transition-all duration-300"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-in slide-in-from-top-2 duration-300">
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-xl hover:bg-muted/50 group"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif",
                      animationDelay: `${index * 50}ms`,
                    }}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Tilt Effect Container */}
        <div
          className="container mx-auto px-4 relative z-10"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - (typeof window !== "undefined" ? window.innerHeight : 800) / 2) / 50}deg) rotateY(${
              (mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 1200) / 2) / 50
            }deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="mb-8 animate-in fade-in-50 slide-in-from-top-5 duration-1000">
              <Badge
                className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 text-lg font-medium border border-blue-500/20 hover:scale-105 transition-transform cursor-pointer"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <Sparkles className="inline w-5 h-5 mr-2 animate-spin" />
                {currentContent.hero.badge}
              </Badge>
            </div>

            {/* Main Title with Magnetic Effect */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent leading-tight animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-200 magnetic-text"
              style={{
                fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif",
                transform: `translate(${(mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 1200) / 2) / 30}px, ${
                  (mousePosition.y - (typeof window !== "undefined" ? window.innerHeight : 800) / 2) / 30
                }px)`,
              }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {currentContent.hero.title}
            </h1>

            {/* Subtitle with Glow Effect */}
            <p
              className="text-2xl md:text-4xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-400 glow-text"
              style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {currentContent.hero.subtitle}
            </p>

            {/* Typed Description */}
            <div className="min-h-[120px] flex items-center justify-center mb-12">
              <p
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-600"
                style={{ fontFamily: language === "fa" ? "Vazirmatn, sans-serif" : "Inter, sans-serif" }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Action Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-800">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                asChild
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <Link href="/join" className="flex items-center">
                  <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  {currentContent.hero.joinButton}
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group px-10 py-4 rounded-full border-2 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:bg-muted/50"
                asChild
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <Link href="/about" className="flex items-center">
                  <ExternalLink className="w-6 h-6 mr-3 group-hover:rotate-45 transition-transform" />
                  {currentContent.hero.learnMore}
                </Link>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-1000">
              <div
                className="flex flex-col items-center text-muted-foreground"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="text-sm mb-2">{currentContent.hero.scrollText}</span>
                <div className="animate-bounce">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Hover Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {currentContent.features.title}
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {currentContent.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.features.items.map((feature, index) => (
              <Card
                key={index}
                className="group p-8 bg-background/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer hover-card"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <CardContent className="p-0 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Animated Counters */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group p-6 bg-background/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer text-center stat-card"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <CardContent className="p-0">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform counter-value">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel with 3D Card Effect */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {currentContent.testimonials.title}
            </h2>
            <p
              className="text-xl text-muted-foreground"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              {currentContent.testimonials.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto perspective">
            <div
              className="card-3d-container"
              style={{
                transform: `rotateY(${(mousePosition.x - (typeof window !== "undefined" ? window.innerWidth : 1200) / 2) / 30}deg) rotateX(${
                  (mousePosition.y - (typeof window !== "undefined" ? window.innerHeight : 800) / 2) / -30
                }deg)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <Card
                className="p-12 bg-background/80 backdrop-blur-sm border-0 shadow-2xl testimonial-card"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <CardContent className="p-0 text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 avatar-glow">
                      {currentContent.testimonials.items[currentTestimonial].avatar}
                    </div>
                    <blockquote className="text-2xl text-foreground mb-6 italic leading-relaxed">
                      "{currentContent.testimonials.items[currentTestimonial].text}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-lg text-foreground">
                        {currentContent.testimonials.items[currentTestimonial].name}
                      </div>
                      <div className="text-muted-foreground">
                        {currentContent.testimonials.items[currentTestimonial].role}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2">
                    {currentContent.testimonials.items.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? "bg-blue-600 scale-125"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Announcement with Hover Glow */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {currentContent.announcement.title}
              </h2>
            </div>

            <Card
              className="relative p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50 border-0 shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden announcement-card"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 animate-pulse">
                  {currentContent.announcement.featured.badge}
                </Badge>
              </div>

              <CardContent className="p-0">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center animate-pulse">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {currentContent.announcement.featured.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {currentContent.announcement.featured.description}
                    </p>
                    <Button
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white hover:scale-105 transition-all duration-300 px-8 py-3 text-lg"
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      <Rocket className="w-5 h-5 mr-2" />
                      {currentContent.announcement.featured.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer with Hover Effects */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="space-y-6">
              <div
                className="flex items-center space-x-3"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">CS</span>
                </div>
                <div>
                  <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {language === "fa" ? "انجمن مهندسی کامپیوتر" : "CS Association"}
                  </div>
                  <div className="text-sm text-gray-400">
                    {language === "fa" ? "دانشگاه تبریز" : "University of Tabriz"}
                  </div>
                </div>
              </div>
              <p
                className="text-gray-300 leading-relaxed"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {currentContent.footer.description}
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                  { icon: Github, href: "#", color: "hover:text-gray-400" },
                  { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                  { icon: Mail, href: "mailto:info@cs-tabriz.ir", color: "hover:text-green-400" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:rotate-12`}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3
                className="font-bold text-xl text-white"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {currentContent.footer.quickLinks}
              </h3>
              <ul className="space-y-3">
                {navItems.slice(0, 6).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3
                className="font-bold text-xl text-white"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {currentContent.footer.contact}
              </h3>
              <div className="space-y-4">
                <div
                  className="flex items-start space-x-3 text-gray-300"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <MapPin className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
                  <span className="leading-relaxed">{currentContent.footer.address}</span>
                </div>
                <div
                  className="flex items-center space-x-3 text-gray-300"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>info@cs-tabriz.ir</span>
                </div>
                <div
                  className="flex items-center space-x-3 text-gray-300"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>+98 41 3393 9000</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3
                className="font-bold text-xl text-white"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Newsletter
              </h3>
              <p
                className="text-gray-300"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                {currentContent.footer.newsletter}
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                />
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p
              className="text-gray-400"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              © {new Date().getFullYear()}{" "}
              {language === "fa"
                ? "انجمن مهندسی کامپیوتر دانشگاه تبریز"
                : "Computer Engineering Association, University of Tabriz"}
              . {currentContent.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          onMouseEnter={() => setCursorVariant("hover")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <ArrowRight className="w-6 h-6 -rotate-90" />
        </Button>
      </div>
    </div>
  )
}
