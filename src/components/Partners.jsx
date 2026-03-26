import React from 'react'

const partners = [
  { name: 'HDFC Bank', abbr: 'HDFC' },
  { name: 'State Bank of India', abbr: 'SBI' },
  { name: 'ICICI Bank', abbr: 'ICICI' },
  { name: 'Axis Bank', abbr: 'AXIS' },
  { name: 'Kotak Mahindra', abbr: 'KOTAK' },
  { name: 'Punjab National Bank', abbr: 'PNB' },
  { name: 'Bank of Baroda', abbr: 'BOB' },
  { name: 'IndusInd Bank', abbr: 'INDUSL' },
  { name: 'Yes Bank', abbr: 'YES' },
  { name: 'Bajaj Finance', abbr: 'BAJAJ' },
  { name: 'L&T Finance', abbr: 'L&T' },
  { name: 'Muthoot Finance', abbr: 'MUTHT' },
  { name: 'Federal Bank', abbr: 'FEDRL' },
  { name: 'IDFC First Bank', abbr: 'IDFC' },
]

const PartnerLogo = ({ name, abbr }) => (
  <div className="partner-logo flex-shrink-0 mx-6 flex items-center justify-center">
    <div className="h-14 px-6 rounded-xl bg-white border border-gray-100 flex items-center gap-3 cursor-default"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)', minWidth: '140px' }}
    >
      <div className="w-8 h-8 rounded-lg bg-[#0B1F3A] flex items-center justify-center flex-shrink-0">
        <span className="text-[#FFD700] font-mono font-bold text-[8px] tracking-tight">{abbr.slice(0, 3)}</span>
      </div>
      <span className="text-[#0B1F3A] font-semibold text-sm whitespace-nowrap">{name}</span>
    </div>
  </div>
)

export default function Partners() {
  const doubled = [...partners, ...partners]

  return (
    <section id="partners" className="py-28 bg-[#f9fafb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block text-[#FFD700] text-xs font-mono tracking-[0.2em] uppercase mb-4 border border-[#FFD700]/40 rounded-full px-3 py-1 bg-[#0B1F3A]/5">
            Partner Institutions
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-5">
            We Negotiate With
            <br />
            <span className="text-gold-gradient">India's Top Lenders</span>
          </h2>
          <p className="text-[#5a6a82] text-lg max-w-xl mx-auto">
            Our established relationships with 14 major banks and NBFCs give us an edge in securing faster, better settlements.
          </p>
        </div>

        {/* Infinite Scroll Ticker */}
        <div className="section-reveal scroll-container overflow-hidden py-4">
          <div className="flex animate-infinite-scroll">
            {doubled.map((partner, i) => (
              <PartnerLogo key={i} {...partner} />
            ))}
          </div>
        </div>

        {/* Trust Note */}
        <div className="section-reveal text-center mt-10" style={{ transitionDelay: '200ms' }}>
          <p className="text-[#5a6a82] text-sm">
            <span className="text-[#0B1F3A] font-semibold">Empanelled with</span> RBI-registered Asset Reconstruction Companies (ARCs) and recognised under SARFAESI framework
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            {['RBI Compliant', 'DRAT Registered', 'IBC Framework', 'SARFAESI Certified'].map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-[#0B1F3A] text-xs font-semibold border border-[#0B1F3A]/15 rounded-full px-4 py-1.5 bg-white"
                style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
                <span className="text-[#FFD700]">✓</span>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
