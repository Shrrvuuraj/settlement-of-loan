import React, { useEffect, useState } from 'react'
import { ArrowRight, ShieldCheck, FileText, TrendingDown } from 'lucide-react'

const FloatingCard = ({ className, delay, icon: Icon, label, value, sub }) => (
  <div
    className={`glass absolute rounded-xl px-4 py-3 shadow-2xl z-20 ${className}`}
    style={{ animation: `float 6s ease-in-out ${delay} infinite` }}
  >
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-[#FFD700]/20 flex items-center justify-center">
        <Icon size={16} className="text-[#FFD700]" />
      </div>
      <div>
        <div className="text-white font-display font-semibold text-sm">{value}</div>
        <div className="text-white/50 text-[10px] tracking-wide">{label}</div>
      </div>
    </div>
    {sub && <div className="text-[#FFD700] text-[10px] mt-1.5 font-mono">{sub}</div>}
  </div>
)

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy"
      style={{ background: 'linear-gradient(145deg, #071428 0%, #0B1F3A 45%, #132d54 100%)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40" />

      {/* Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl"
        style={{ background: 'radial-gradient(circle, #FFD700, transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl"
        style={{ background: 'radial-gradient(circle, #4A90E2, transparent 70%)' }}
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,215,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-[#FFD700]/25 text-[#FFD700] text-xs font-mono tracking-wider mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
              RBI REGISTERED · LEGAL DEBT ADVISORS
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-4xl md:text-5xl lg:text-6xl font-800 text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Settle Your Loans{' '}
              <span className="text-gold-gradient">Legally.</span>
              <br />
              Reduce Your{' '}
              <span className="relative">
                Burden.
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6">
                  <path d="M0 5 Q50 0 100 4 Q150 8 200 3" stroke="#FFD700" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p
              className={`text-white/65 text-lg leading-relaxed mb-10 max-w-lg transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Expert legal negotiation with banks, NBFCs, and ARCs to significantly reduce your outstanding loan liability — through transparent, court-backed settlement strategies.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold animate-pulse-gold"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="btn-outline inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base"
              >
                Check Eligibility
                <ShieldCheck size={18} />
              </a>
            </div>

            {/* Mini Trust Strip */}
            <div
              className={`flex items-center gap-5 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {[
                { label: 'No Hidden Fees' },
                { label: 'Confidential' },
                { label: 'DRAT Approved' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <span className="text-[#FFD700]">✓</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative h-[480px] hidden lg:block transition-all duration-1000 delay-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Central Document Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 glass rounded-2xl p-6 gold-border-glow z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="text-white/50 text-xs font-mono tracking-wider">SETTLEMENT OFFER</span>
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-[10px] font-semibold">APPROVED</span>
              </div>

              <div className="mb-4">
                <div className="text-white/40 text-[10px] mb-1 uppercase tracking-wider">Original Loan Amount</div>
                <div className="font-display text-white text-2xl font-bold line-through decoration-[#FF4444]/60">₹1,00,00,000</div>
              </div>

              <div className="divider-gold mb-4 opacity-40" />

              <div className="mb-5">
                <div className="text-white/40 text-[10px] mb-1 uppercase tracking-wider">Settlement Amount</div>
                <div className="font-display text-[#FFD700] text-3xl font-bold">₹42,00,000</div>
                <div className="text-green-400 text-xs mt-1 font-semibold">✓ 58% Reduction Achieved</div>
              </div>

              <div className="flex items-center gap-2 text-white/40 text-[10px]">
                <FileText size={12} />
                Negotiated with HDFC Bank — 14 months
              </div>
            </div>

            {/* Floating Cards */}
            <FloatingCard
              className="top-8 left-4"
              delay="0s"
              icon={ShieldCheck}
              label="Legal Protection"
              value="100% Legal"
              sub="RBI Framework Compliant"
            />
            <FloatingCard
              className="bottom-12 left-0"
              delay="1.5s"
              icon={TrendingDown}
              label="Avg Reduction"
              value="40–60%"
              sub="Across all loan types"
            />
            <FloatingCard
              className="top-24 right-2"
              delay="3s"
              icon={FileText}
              label="Cases Settled"
              value="10,000+"
              sub="Satisfied Clients"
            />

            {/* Decorative Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#FFD700]/8 z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-[#FFD700]/5 z-0" />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
