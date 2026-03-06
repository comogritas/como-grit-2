import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import 'flag-icons/css/flag-icons.min.css'
import Logo from '../assets/Logo.png'

const flags = {
  en: "gb",
  hr: "hr"
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navLinks = [
    { path: '/', label: "Home" },
    { path: '/about', label: "About Us" },
    { path: '/services', label: "Services" },
    { path: '/gallery', label: "Gallery" },
    { path: '/contact', label: "Contact Us" }
  ]

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const getLanguageLabel = (lang) => lang === 'en' ? "English" : "Croatian"

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-50 relative">
      <nav className="max-w-7xl mx-auto px-6 py-2">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="COMO GRIT Logo"
              className="w-44 md:w-48 h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-700 hover:text-blue-600 font-semibold transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="relative group">
              <button className="px-3 py-1 border rounded border-slate-300 hover:border-blue-600 font-semibold flex items-center gap-2">
                <span className={`fi fi-${flags[i18n.language]} w-5 h-5`}></span>
                {getLanguageLabel(i18n.language)}
              </button>

              <div className="absolute right-0 mt-2 bg-white border border-slate-300 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">

                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-2"
                >
                  <span className="fi fi-gb w-5 h-5"></span> English
                </button>

                <button
                  onClick={() => changeLanguage('hr')}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-2"
                >
                  <span className="fi fi-hr w-5 h-5"></span> Croatian
                </button>

              </div>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 top-full w-full bg-white border-t border-slate-200 py-4 shadow-md">
            <div className="flex flex-col gap-4 px-6">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left text-slate-700 hover:text-blue-600 font-semibold py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Switch */}
              <div className="flex gap-4 pt-4">

                <button
                  onClick={() => changeLanguage('en')}
                  className="flex items-center gap-2"
                >
                  <span className="fi fi-gb w-5 h-5"></span> English
                </button>

                <button
                  onClick={() => changeLanguage('hr')}
                  className="flex items-center gap-2"
                >
                  <span className="fi fi-hr w-5 h-5"></span> Croatian
                </button>

              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  )
}