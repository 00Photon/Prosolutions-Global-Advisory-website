import Link from "next/link"
import { Globe, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary">
                <Globe className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white tracking-tight">PROSOLUTIONS</span>
                <span className="text-[10px] font-medium text-slate-400 tracking-widest">GLOBAL ADVISORY</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner for corporate structuring, citizenship by investment, and international real estate solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/corporate-services" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                  Corporate Services
                </Link>
              </li>
              <li>
                <Link href="/citizenship-relocation" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                  Citizenship & Relocation
                </Link>
              </li>
              <li>
                <Link href="/real-estate-services" className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-secondary" />
                  Real Estate Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Global Headquarters<br />Financial District, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>contact@prosolutions.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Prosolutions Global Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
