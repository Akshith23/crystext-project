import { STATISTICS } from '../../data/content'
import AnimatedCounter from '../ui/AnimatedCounter'
import GlassCard from '../ui/GlassCard'

export default function Statistics() {
  return (
    <section className="section-padding relative bg-[#FFFBF5]">
      <div className="relative mx-auto max-w-6xl">
        <GlassCard hover={false} className="px-6 py-12 md:px-12">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {STATISTICS.map((stat, index) => (
              <div key={stat.label} className="border-l border-[#E7D7C9] pl-6 first:border-l-0 first:pl-0">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} duration={1.8 + index * 0.15} />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
