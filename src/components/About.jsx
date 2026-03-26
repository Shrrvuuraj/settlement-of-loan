import React from 'react'
import { CheckCircle2, Scale, Users, FileCheck, ShieldCheck } from 'lucide-react'

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0B1F3A]/8 flex items-center justify-center group-hover:bg-[#FFD700]/15 transition-colors duration-300">
      <Icon size={18} className="text-[#0B1F3A] group-hover:text-[#b89900]" />
    </div>
    <div>
      <h4 className="font-semibold text-[#0B1F3A] mb-1">{title}</h4>
      <p className="text-[#5a6a82] text-sm leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function About() {
  const features = [
    {
      icon: Scale,
      title: 'Certified Legal Experts',
      description: 'Backed by retired bankers, chartered accountants, and debt recovery attorneys with 20+ years of industry experience.',
    },
    {
      icon: Users,
      title: 'Dedicated Negotiation Team',
      description: 'Assigned relationship managers who interface directly with banks and NBFCs on your behalf, ensuring the best outcome.',
    },
    {
      icon: FileCheck,
      title: 'Fully Transparent Process',
      description: 'Every step is documented and shared. You receive clear timelines, progress reports, and all correspondence.',
    },
    {
      icon: ShieldCheck,
      title: 'Legally Protected Framework',
      description: 'All settlements comply with SARFAESI Act, IBC provisions, and RBI guidelines — no grey areas, ever.',
    },
  ]

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Illustration */}
          <div className="section-reveal relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B1F3A] to-[#132d54] p-10 shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-hero-pattern opacity-30" />

              {/* Central Scale Icon */}
              <div className="relative z-10 text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#FFD700]/15 border border-[#FFD700]/25 mb-4">
                  <Scale size={44} className="text-[#FFD700]" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-white text-2xl font-bold">Justice in Finance</h3>
                <p className="text-white/50 text-sm mt-1">Where law meets debt relief</p>
              </div>

              {/* Process Steps */}
              <div className="relative z-10 space-y-3">
                {[
                  { step: '01', label: 'Case Assessment', note: 'Free, confidential' },
                  { step: '02', label: 'Legal Strategy', note: 'Tailored plan' },
                  { step: '03', label: 'Bank Negotiation', note: 'Expert-led' },
                  { step: '04', label: 'Settlement & Closure', note: 'Documented legally' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 glass rounded-xl px-4 py-3">
                    <span className="font-mono text-[#FFD700] text-xs font-bold w-6">{item.step}</span>
                    <span className="text-white font-medium text-sm flex-1">{item.label}</span>
                    <span className="text-white/40 text-[10px] font-mono">{item.note}</span>
                    <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
                  </div>
                ))}
              </div>

              {/* Bottom badge */}
              <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/40 text-xs font-mono">EST. 2010</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFD700] text-xs">★</span>
                  ))}
                  <span className="text-white/40 text-xs ml-1">4.9 / 5.0</span>
                </div>
              </div>
            </div>

            {/* Shadow blob */}
            <div className="absolute -bottom-6 left-8 right-8 h-12 bg-[#0B1F3A]/20 blur-2xl rounded-full -z-10" />
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <div className="section-reveal">
              <span className="inline-block text-[#FFD700] text-xs font-mono tracking-[0.2em] uppercase mb-4 border border-[#FFD700]/30 rounded-full px-3 py-1 bg-[#FFD700]/5">
                Who We Are
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-tight mb-6">
                India's Most Trusted
                <span className="text-gold-gradient"> Loan Settlement</span> Firm
              </h2>
              <p className="text-[#5a6a82] text-lg leading-relaxed mb-4">
                LexSettle is a premier legal-financial advisory firm specialising exclusively in debt resolution and loan settlement. We bridge the gap between borrowers and lending institutions through structured, legally-sound negotiation.
              </p>
              <p className="text-[#5a6a82] leading-relaxed mb-10">
                With over a decade of experience, our team has successfully settled thousands of cases across home loans, business loans, personal loans, and NPA accounts — delivering real relief to individuals and businesses across India.
              </p>
            </div>

            <div className="section-reveal space-y-6" style={{ transitionDelay: '150ms' }}>
              {features.map((f, i) => (
                <Feature key={i} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
