"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fa"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  content: any
}

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
      badge: "Innovation & Excellence",
      title: "Computer Engineering Association",
      subtitle: "University of Tabriz",
      description:
        "Rooted in Knowledge, Growing in Innovation - Empowering the next generation of computer engineers through cutting-edge projects, competitions, and collaborative learning.",
      joinButton: "Join Our Community",
      learnMore: "Learn More",
    },
    stats: {
      members: "Active Members",
      awards: "Awards Won",
      projects: "Projects Completed",
      events: "Events Organized",
    },
    announcement: {
      title: "Latest Announcements",
      featured: {
        title: "TabCode 2024 Registration Now Open!",
        description:
          "Join the most prestigious programming competition in our faculty. Register now for TabCode 2024 and compete with the best minds in computer science.",
        cta: "Register Now",
      },
    },
    footer: {
      description: "Empowering computer engineering students through innovation, collaboration, and excellence.",
      quickLinks: "Quick Links",
      contact: "Contact Info",
      social: "Follow Us",
      rights: "All rights reserved.",
      address: "Faculty of Computer Engineering, University of Tabriz, Tabriz, Iran",
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
      badge: "نوآوری و تعالی",
      title: "انجمن مهندسی کامپیوتر",
      subtitle: "دانشگاه تبریز",
      description:
        "ریشه در دانش، رشد در نوآوری - توانمندسازی نسل آینده مهندسان کامپیوتر از طریق پروژه‌های پیشرفته، مسابقات و یادگیری مشارکتی.",
      joinButton: "به جامعه ما بپیوندید",
      learnMore: "بیشتر بدانید",
    },
    stats: {
      members: "اعضای فعال",
      awards: "جوایز کسب شده",
      projects: "پروژه‌های تکمیل شده",
      events: "رویدادهای برگزار شده",
    },
    announcement: {
      title: "آخرین اعلانات",
      featured: {
        title: "ثبت‌نام تاب‌کد ۲۰۲۴ آغاز شد!",
        description:
          "در معتبرترین مسابقه برنامه‌نویسی دانشکده شرکت کنید. همین حالا برای تاب‌کد ۲۰۲۴ ثبت‌نام کنید و با بهترین ذهن‌های علوم کامپیوتر رقابت کنید.",
        cta: "ثبت‌نام کنید",
      },
    },
    footer: {
      description: "توانمندسازی دانشجویان مهندسی کامپیوتر از طریق نوآوری، همکاری و تعالی.",
      quickLinks: "لینک‌های سریع",
      contact: "اطلاعات تماس",
      social: "ما را دنبال کنید",
      rights: "تمامی حقوق محفوظ است.",
      address: "دانشکده مهندسی کامپیوتر، دانشگاه تبریز، تبریز، ایران",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        content: content[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
