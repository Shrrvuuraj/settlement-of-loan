import React, { useState, useEffect, useRef } from 'react'
import { TrendingDown, Users, Building2, Award } from 'lucide-react'

const useCounter = (target, duration = 2000, isVisible) => {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!isVisible || started.current) return
    started.current = true

    const startTime = Date.now()
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''))

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * numericTarget

      if (progress < 1) {
        setCount(current)
        requestAnimationFrame(tick)
      } else {
        setCount(numericTarget)
      }
    }

    requestAnimationFrame(tick)
  }, [isVisible, target, duration])

  return count
}

const Stat = ({ icon: Icon, prefix, value, suffix, label, color, isVisible, delay }) => {
  const numericCount = useCounter(value, 2000, isVisible)

  const formatValue = (num) => {
    const original = parseFloat(value.replace(/[^0-9.]/g, ''))
    if (original >= 500) {
      return Math.round(num) + (value.includes('+') ? '+' : '')
    }
    if (Number.isInteger(original)) {
      return Math.round(num).toLocaleString('en-IN') + (value.includes('+') ? '+' : '')
    }
    return num.toFixed(1) + (value.includes('+') ? '+' : '')
  }

  return (
    <div
      className="section-reveal text-center px-8 py-10 relative group"
      style={{ transitionDelay: delay }}
    >
      {/* Vertical Divider (not last) */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent last:hidden" />

      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 ${color}`}>
        <Icon size={24} className="text-white" />
      </div>

      <div className="font-display text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-2">
        {prefix}
        <span className="text-gold-gradient">
          {isVisible ? formatValue(numericCount) : '0'}
        </span>
        {suffix}
      </div>

      <div className="text-[#5a6a82] text-sm font-medium tracking-wide">{label}</div>
    </div>
  )
}

export default function TrustIndicators() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: TrendingDown,
      prefix: '₹',
      value: '500',
      suffix: '+ Cr',
      label: 'Total Debt Settled',
      color: 'bg-[#0B1F3A]',
      delay: '0ms',
    },
    {
      icon: Users,
      prefix: '',
      value: '10000+',
      suffix: '',
      label: 'Clients Served',
      color: 'bg-[#1a3a6e]',
      delay: '100ms',
    },
    {
      icon: Building2,
      prefix: '',
      value: '14',
      suffix: '',
      label: 'Partner Institutions',
      color: 'bg-[#0B1F3A]',
      delay: '200ms',
    },
    {
      icon: Award,
      prefix: '',
      value: '97',
      suffix: '%',
      label: 'Success Rate',
      color: 'bg-[#1a3a6e]',
      delay: '300ms',
    },
  ]

  return (
    <section ref={ref} className="relative bg-white -mt-1 z-10">
      {/* Top accent line */}
      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-y lg:divide-y-0 divide-gray-100">
          {stats.map((stat, i) => (
            <Stat key={i} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>

      <div className="divider-gold opacity-40" />
    </section>
  )
}
