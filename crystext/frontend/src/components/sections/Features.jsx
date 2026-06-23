import { FiFileText, FiCpu, FiBox, FiDatabase, FiZap, FiUsers } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import { FEATURES } from '../../data/content'

const ICONS = { FiFileText, FiCpu, FiBox, FiDatabase, FiZap, FiUsers }

export default function Features() {
  return (
    <section id="features" className="section-padding relative bg-[#FFF7ED]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          heading="A complete AI crystal generation workflow"
          description="Describe a material, generate CIF content, visualize the crystal, predict properties, and download the result."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon]
            return (
              <GlassCard key={feature.id} className="p-7" delay={index * 0.06}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#FFD6A5] bg-[#FFF7ED] text-xl text-[#FF7A00]">
                  <Icon />
                </div>
                <h3 className="font-display text-lg font-bold text-[#1F2937]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5147]">{feature.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
