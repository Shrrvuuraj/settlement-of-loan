import React from 'react'
import { Scale, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  const links = {
    Services: ['Loan Settlement', 'Debt Negotiation', 'Legal Advisory', 'Credit Recovery', 'NPA Resolution'],
    Resources: ['Eligibility Checker', 'Settlement Guide', 'Legal FAQs', 'Case Studies', 'Blog'],
    Company: ['About Us', 'Our Team', 'Careers', 'Media', 'Contact'],
  }

  return (
    <footer className="bg-[#071428] relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center">
                <Scale size={18} className="text-navy" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-white text-xl">
                Lex<span className="text-[#FFD700]">Settle</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              India's premier legal-financial advisory firm for loan settlement and debt resolution. Trusted by 10,000+ clients across the country.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              {[
                { icon: Phone, val: '+91 98765 43210' },
                { icon: Mail, val: 'consult@lexsettle.in' },
                { icon: MapPin, val: 'Mumbai, Maharashtra' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white/35 text-xs">
                  <item.icon size={12} className="text-[#FFD700] flex-shrink-0" />
                  {item.val}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/30 hover:text-[#FFD700] hover:border-[#FFD700]/30 transition-colors duration-200">
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">{category}</h4>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/35 hover:text-[#FFD700] text-sm transition-colors duration-200 block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8 mb-8" />

        {/* Legal Disclaimer */}
        <div className="bg-white/3 border border-white/6 rounded-xl p-5 mb-8">
          <h5 className="text-[#FFD700] text-[10px] font-mono tracking-[0.2em] uppercase mb-2">Legal Disclaimer</h5>
          <p className="text-white/25 text-[10px] leading-relaxed font-mono">
            LexSettle is a financial advisory firm and does not guarantee any specific settlement outcome. Results vary based on individual case circumstances, lender policies, and applicable laws. Settlement amounts shown in case studies are for illustrative purposes only. Engaging our services does not constitute legal representation unless a separate retainer agreement is signed with our empanelled legal counsel. Services are subject to RBI guidelines, SARFAESI Act 2002, and IBC 2016. Past performance is not indicative of future results. This communication does not constitute legal or financial advice.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-mono">
            © 2025 LexSettle Financial Advisory Pvt. Ltd. · CIN: U74999MH2010PTC210000
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
              <a key={i} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
