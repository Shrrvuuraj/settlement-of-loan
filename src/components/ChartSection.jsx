import React, { useState, useEffect, useRef } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell, LabelList
} from 'recharts'

const data = [
  { stage: 'Original\nLoan', amount: 100, label: '₹1.00 Cr', color: '#c0392b', fillColor: 'rgba(192,57,43,0.85)' },
  { stage: 'Post\nDefault', amount: 112, label: '₹1.12 Cr', color: '#e74c3c', fillColor: 'rgba(231,76,60,0.7)' },
  { stage: 'After\nNotice', amount: 108, label: '₹1.08 Cr', color: '#e67e22', fillColor: 'rgba(230,126,34,0.75)' },
  { stage: 'Negotiation\nStarted', amount: 78, label: '₹78 L', color: '#f39c12', fillColor: 'rgba(243,156,18,0.75)' },
  { stage: 'Counter\nOffer', amount: 55, label: '₹55 L', color: '#2ecc71', fillColor: 'rgba(46,204,113,0.75)' },
  { stage: 'Final\nSettlement', amount: 42, label: '₹42 L', color: '#FFD700', fillColor: 'rgba(255,215,0,0.9)' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-dark rounded-xl px-4 py-3 text-white text-sm border border-[#FFD700]/20 shadow-xl">
        <div className="font-semibold mb-1">{label.replace('\n', ' ')}</div>
        <div className="text-[#FFD700] font-mono font-bold">{payload[0].payload.label}</div>
        <div className="text-white/50 text-xs">{payload[0].value}L equivalent</div>
      </div>
    )
  }
  return null
}

export default function ChartSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="process" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 section-reveal">
          <span className="inline-block text-[#FFD700] text-xs font-mono tracking-[0.2em] uppercase mb-4 border border-[#FFD700]/40 rounded-full px-3 py-1 bg-[#0B1F3A]/5">
            Loan Transformation
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-5">
            See How We Reduce
            <br />
            <span className="text-gold-gradient">Your Liability</span>
          </h2>
          <p className="text-[#5a6a82] text-lg max-w-2xl mx-auto">
            A real case study showing how strategic legal negotiation across our 14 partner institutions reduced a ₹1 Crore loan to ₹42 Lakhs.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-10 section-reveal" style={{ transitionDelay: '100ms' }}>
          {[
            { label: 'Original Amount', value: '₹1,00,00,000', sub: 'NPA classified', color: 'border-red-200 bg-red-50' },
            { label: 'Amount Saved', value: '₹58,00,000', sub: '58% reduction', color: 'border-green-200 bg-green-50' },
            { label: 'Settlement Amount', value: '₹42,00,000', sub: 'Final closure', color: 'border-[#FFD700]/40 bg-[#FFD700]/5' },
          ].map((s, i) => (
            <div key={i} className={`rounded-xl p-5 border text-center ${s.color}`}>
              <div className="font-display text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-0.5">{s.value}</div>
              <div className="text-[#5a6a82] text-xs mb-1">{s.label}</div>
              <div className="text-[10px] font-mono text-[#5a6a82]/70">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="section-reveal rounded-2xl bg-[#0B1F3A] p-6 lg:p-10 relative overflow-hidden"
          style={{ transitionDelay: '200ms', boxShadow: '0 20px 60px rgba(11,31,58,0.25)' }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-40" />

          {/* Chart Header */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-white text-xl font-bold">Negotiation Progression</h3>
              <p className="text-white/45 text-sm mt-1">₹1 Cr Loan → ₹42 L Settlement (Lakhs equivalent)</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-red-400 inline-block" />
                <span className="text-white/50">Pre-negotiation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-[#FFD700] inline-block" />
                <span className="text-white/50">Post-negotiation</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 h-72 lg:h-96">
            {isVisible && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 10 }} barSize={44}>
                  <CartesianGrid strokeDasharray="3 6" stroke="rgba(255,255,255,0.07)" vertical={false} />
                  <XAxis
                    dataKey="stage"
                    tick={{ fill: 'rgba(255,255,255,0.45)', fontSize: 11, fontFamily: 'DM Sans' }}
                    axisLine={false}
                    tickLine={false}
                    interval={0}
                  />
                  <YAxis
                    tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 11, fontFamily: 'JetBrains Mono' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `₹${v}L`}
                    width={55}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)', radius: 6 }} />
                  <ReferenceLine y={42} stroke="rgba(255,215,0,0.4)" strokeDasharray="6 3" />
                  <Bar dataKey="amount" radius={[6, 6, 0, 0]} animationDuration={1200} animationBegin={200}>
                    {data.map((entry, index) => (
                      <Cell key={index} fill={entry.fillColor} />
                    ))}
                    <LabelList
                      dataKey="label"
                      position="top"
                      style={{ fill: 'rgba(255,255,255,0.55)', fontSize: 10, fontFamily: 'JetBrains Mono' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Bottom note */}
          <div className="relative z-10 mt-6 pt-5 border-t border-white/10 text-center text-white/35 text-xs font-mono">
            Strategic negotiation across 14 partner institutions · HDFC, SBI, Axis, ICICI & more · Results may vary per case
          </div>
        </div>
      </div>
    </section>
  )
}
