import React from 'react'
import { Scale, Handshake, FileText, CreditCard, ArrowRight } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, tag, index }) => (
  <div
    className="section-reveal group relative bg-white rounded-2xl p-8 border border-gray-100 card-hover cursor-default"
    style={{
      transitionDelay: `${index * 80}ms`,
      boxShadow: '0 2px 20px rgba(11, 31, 58, 0.06)'
    }}
  >
    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-2xl pointer-events-none">
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[#FFD700]/8 group-hover:bg-[#FFD700]/15 transition-colors duration-300" />
    </div>

    {/* Tag */}
    <div className="flex items-center justify-between mb-6">
      <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center group-hover:bg-[#FFD700] transition-colors duration-300">
        <Icon size={20} className="text-[#FFD700] group-hover:text-[#0B1F3A] transition-colors duration-300" />
      </div>
      <span className="text-[10px] font-mono tracking-wider text-[#0B1F3A]/30 uppercase border border-[#0B1F3A]/10 px-2.5 py-1 rounded-full">
        {tag}
      </span>
    </div>

    <h3 className="font-display text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#0B1F3A]">
      {title}
    </h3>
    <p className="text-[#5a6a82] text-sm leading-relaxed mb-6">{description}</p>

    <div className="flex items-center gap-1.5 text-[#0B1F3A]/40 group-hover:text-[#b89900] text-xs font-semibold transition-colors duration-300">
      Learn More
      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </div>
)

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: 'Loan Settlement',
      description: 'We negotiate directly with banks, NBFCs, and ARCs to legally reduce your outstanding loan amount. Full case handling from assessment to closure.',
      tag: 'Core Service',
    },
    {
      icon: Handshake,
      title: 'Debt Negotiation',
      description: 'Strategic, evidence-based negotiation to secure the most favourable settlement terms. We handle all communication with creditors on your behalf.',
      tag: 'Advisory',
    },
    {
      icon: FileText,
      title: 'Legal Advisory',
      description: 'Expert guidance on SARFAESI notices, DRT proceedings, and legal responses. We protect your rights at every stage of the debt recovery process.',
      tag: 'Legal',
    },
    {
      icon: CreditCard,
      title: 'Credit Recovery Planning',
      description: 'Post-settlement, we help you rebuild your CIBIL score and financial standing through structured credit rehabilitation programs.',
      tag: 'Post-Settlement',
    },
  ]

  return (
    <section id="services" className="py-28 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 section-reveal">
          <span className="inline-block text-[#FFD700] text-xs font-mono tracking-[0.2em] uppercase mb-4 border border-[#FFD700]/40 rounded-full px-3 py-1 bg-[#0B1F3A]/5">
            What We Do
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-5">
            Comprehensive Debt
            <br />
            <span className="text-gold-gradient">Relief Services</span>
          </h2>
          <p className="text-[#5a6a82] text-lg max-w-2xl mx-auto leading-relaxed">
            From initial case assessment to final closure, we offer end-to-end support designed to legally reduce your financial burden.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 section-reveal" style={{ transitionDelay: '300ms' }}>
          <div className="rounded-2xl bg-[#0B1F3A] px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{ boxShadow: '0 20px 60px rgba(11, 31, 58, 0.25)' }}>
            <div>
              <h4 className="font-display text-white text-xl font-bold mb-1">Not sure which service you need?</h4>
              <p className="text-white/50 text-sm">Our experts will assess your case for free and recommend the best path forward.</p>
            </div>
            <a href="#contact" className="btn-primary flex-shrink-0 px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap inline-flex items-center gap-2">
              Book Free Assessment
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
