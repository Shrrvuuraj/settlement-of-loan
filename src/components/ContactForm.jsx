import React, { useState } from 'react'
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'

const InputField = ({ label, type = 'text', placeholder, id, required }) => (
  <div>
    <label htmlFor={id} className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">
      {label} {required && <span className="text-[#FFD700]">*</span>}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="input-field w-full rounded-xl px-4 py-3.5 text-sm"
      required={required}
    />
  </div>
)

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0d2347] to-[#071428]" />
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />

      {/* Gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-32 opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #FFD700, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <div className="section-reveal">
            <span className="inline-block text-[#FFD700] text-xs font-mono tracking-[0.2em] uppercase mb-6 border border-[#FFD700]/30 rounded-full px-3 py-1 bg-[#FFD700]/5">
              Get Started
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Begin Your
              <br />
              <span className="text-gold-gradient">Settlement Journey</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Share your loan details with us. Our experts will review your case within 24 hours and reach out with a personalised settlement strategy — completely free, completely confidential.
            </p>

            {/* Contact Details */}
            <div className="space-y-5 mb-10">
              {[
                { icon: Phone, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat, 9am–7pm' },
                { icon: Mail, label: 'Email Us', value: 'consult@lexsettle.in', sub: 'Response within 4 hours' },
                { icon: MapPin, label: 'Head Office', value: 'Mumbai, Maharashtra', sub: 'Pan-India Services' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-[#FFD700]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] font-mono tracking-widest uppercase mb-0.5">{item.label}</div>
                    <div className="text-white font-medium text-sm">{item.value}</div>
                    <div className="text-white/30 text-xs">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee strip */}
            <div className="flex flex-wrap gap-3">
              {['Free Consultation', 'No Upfront Fees', '100% Confidential', 'Results in 30–90 Days'].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <CheckCircle2 size={12} className="text-[#FFD700]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="section-reveal" style={{ transitionDelay: '150ms' }}>
            <div className="relative rounded-2xl p-8 lg:p-10 glass gold-border-glow">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="font-display text-white text-2xl font-bold mb-1.5">Request Settlement Plan</h3>
                <p className="text-white/40 text-sm">We'll respond within 24 business hours</p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-400" />
                  </div>
                  <h4 className="font-display text-white text-xl font-bold mb-2">Request Submitted!</h4>
                  <p className="text-white/50 text-sm">Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField label="Full Name" id="name" placeholder="Ramesh Sharma" required />
                    <InputField label="Phone Number" type="tel" id="phone" placeholder="+91 98765 43210" required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="loan-amount" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">
                        Loan Amount <span className="text-[#FFD700]">*</span>
                      </label>
                      <select
                        id="loan-amount"
                        className="input-field w-full rounded-xl px-4 py-3.5 text-sm appearance-none cursor-pointer"
                        required
                      >
                        <option value="" disabled selected className="bg-[#0B1F3A]">Select range</option>
                        <option className="bg-[#0B1F3A]">Below ₹10 Lakhs</option>
                        <option className="bg-[#0B1F3A]">₹10 – ₹50 Lakhs</option>
                        <option className="bg-[#0B1F3A]">₹50L – ₹1 Crore</option>
                        <option className="bg-[#0B1F3A]">₹1 Crore – ₹5 Crore</option>
                        <option className="bg-[#0B1F3A]">Above ₹5 Crore</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="bank" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">
                        Bank / NBFC <span className="text-[#FFD700]">*</span>
                      </label>
                      <select
                        id="bank"
                        className="input-field w-full rounded-xl px-4 py-3.5 text-sm appearance-none cursor-pointer"
                        required
                      >
                        <option value="" disabled selected className="bg-[#0B1F3A]">Select lender</option>
                        <option className="bg-[#0B1F3A]">HDFC Bank</option>
                        <option className="bg-[#0B1F3A]">State Bank of India</option>
                        <option className="bg-[#0B1F3A]">ICICI Bank</option>
                        <option className="bg-[#0B1F3A]">Axis Bank</option>
                        <option className="bg-[#0B1F3A]">Kotak Mahindra</option>
                        <option className="bg-[#0B1F3A]">Punjab National Bank</option>
                        <option className="bg-[#0B1F3A]">Bajaj Finance</option>
                        <option className="bg-[#0B1F3A]">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/60 text-xs font-mono tracking-wider uppercase mb-2">
                      Brief Description
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Briefly describe your loan situation, how long overdue, any notices received..."
                      className="input-field w-full rounded-xl px-4 py-3.5 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2.5 mt-2"
                  >
                    <Send size={17} />
                    Request Settlement Plan
                  </button>

                  <p className="text-white/25 text-[10px] text-center leading-relaxed font-mono">
                    By submitting, you agree to our Privacy Policy. Your information is encrypted and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
